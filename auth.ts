import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import client from "./lib/prisma";
import bcrypt from "bcrypt";
import { User } from "./types";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        const user: User | null = await client.user.findUnique({
          where: {
            Email: email,
          },
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isValidPassword = await bcrypt.compare(password, user.Password);

        if (!isValidPassword) {
          throw new Error("Password is incorrect");
        }

        console.log("Password is valid");

        return {
          id: user.id,
          username: user.Username,
          email: user.Email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.id = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        username: token.username as string,
        email: token.email as string,
        id: token.id as string,
      };

      return session;
    },
  },
});
