import NextAuth from "next-auth";
import Credetials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credetials({
      name: "credentials",

      authorize: async (credentials) => {
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
