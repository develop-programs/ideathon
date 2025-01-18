import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string
            email: string
            password: string
            role: string
            createdAt: string
            updatedAt: string
        } & DefaultSession["user"]
    }
}