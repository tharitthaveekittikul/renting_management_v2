import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session {
    user: {
      firstName?: string | null;
      lastName?: string | null;
      email?: string | null;
      role?: string | null;
    };
  }
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email, name } = user;
      const [firstName, lastName] = name ? name.split(" ") : [null, null];

      try {
        await prisma.user.upsert({
          where: { email: email || undefined },
          update: { updatedAt: new Date() },
          create: {
            email: email || "",
            firstName: firstName || "",
            lastName: lastName || "",
            role: "Member",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
        return true;
      } catch (error) {
        console.error("Error creating/updating user", error);
        return false;
      }
    },

    async session({ session }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user?.email || undefined },
      });
      if (dbUser) {
        if (session.user) {
          session.user.role = dbUser.role;
        }
      }
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
});
