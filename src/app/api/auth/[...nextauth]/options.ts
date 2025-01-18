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
                prisma.$connect();
                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.username
                        }
                    })
                    if (user && user.password === credentials.password) {
                        return {
                            id: user.id.toString(),
                            email: user.email,
                            password: user.password,
                            role: user.role,
                            createdAt: user.createdAt,
                            updatedAt: user.updatedAt
                        }
                    } else {
                        return null
                    }
                } catch (error) {
                    return null
                }
            },
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async session({ session }) {
            return session
        },
        async jwt({ token }) {
            return token
        }
    }
};
