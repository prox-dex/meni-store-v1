"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signUp } from "@/app/(auth)/sign-up/server"
import { useTransition } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      toast.loading("Signing up...", { id: "signup" });
      const result = await signUp(formData);
      if (!result.success) {
        toast.error("Failed to sign up", { id: "signup" });
        return;
      }
      toast.success("Account created successfully", { id: "signup" });
      router.push("/");
    });
  }
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" name="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" name="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" name="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="image">
                Image
              </FieldLabel>
              <Input id="image" name="image" type="text" />
              <FieldDescription>Please enter the URL of your profile image.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">
                  {isPending ? "Signing up..." : "Create Account"}
                </Button>
                <FieldDescription className="px-6 text-center cursor-pointer" onClick={() => router.push("/sign-in")}>
                  Already have an account? Sign in
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
