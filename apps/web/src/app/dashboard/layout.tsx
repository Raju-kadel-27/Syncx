import { NEXT_AUTH_OPTIONS } from "@syncx/lib/next-auth/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextAuthProvider } from "~/providers/next-auth";

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashBoardLayout({ children }: DashBoardLayoutProps) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session) {
    redirect("/auth/signin");
  }

  return <NextAuthProvider session={session}>{children}</NextAuthProvider>;
}
