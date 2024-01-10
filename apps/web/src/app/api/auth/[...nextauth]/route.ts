import NextAuth from "next-auth";
import { NEXT_AUTH_OPTIONS } from "@syncx/lib/next-auth/auth-options";

const handler = NextAuth({
  ...NEXT_AUTH_OPTIONS,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/signin",
  },
});

export {
  handler as GET,
  handler as POST
}
