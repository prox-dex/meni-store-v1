"use server";

import { authClient } from "@/lib/auth-client";

export async function signIn(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const result = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
    });

    if (result.error) {
        console.error(result.error);
        return { success: false};
    }
    return { success: true };
}