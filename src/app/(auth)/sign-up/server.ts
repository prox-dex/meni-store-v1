"use server";

import { authClient } from "@/app/lib/auth-client";

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const image = formData.get("image") as string;
    const result = await authClient.signUp.email({
        email,
        password,
        name,
        image,
        callbackURL: "/",
    });

    if (result.error) {
        console.error(result.error);
        return { success: false };
    }
    return { success: true };
}