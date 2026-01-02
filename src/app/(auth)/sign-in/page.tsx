import { SigninForm } from "@/components/signin-form"
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sign In",
  description: "Sign in to your account",
  openGraph: { url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/sign-in` },
});

export default function SignInPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SigninForm />
      </div>
    </div>
  );
}