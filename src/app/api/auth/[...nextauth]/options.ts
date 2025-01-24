import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, _req) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }
                try {
                    if (credentials.username === 'admin' && credentials.password === 'admin') {
                        return { id: 'admin', name: 'admin', email: 'admin@example.com', role: 'admin', username: 'admin', password: 'admin' }
                    }
                } catch (error) {
                    return null;
                }
                return null;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            session.user.username = token.username as string;
            session.user.password = token.password as string;
            session.user.role = token.role as string;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
                token.password = user.password;
                token.role = user.role;
            }
            return token;
        }
    },
    pages: {
        signIn: '/auth/signin',
    }
};
