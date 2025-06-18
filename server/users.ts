"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return {
      success: true,
      message: "Signed in successfully!",
    };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Failed to sign in. Please check your credentials.",
    };
  }
};

export const signUp = async (email: string, password: string, name: string) => {
  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });
};
