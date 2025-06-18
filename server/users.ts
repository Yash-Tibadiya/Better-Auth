"use server";

import { auth } from "@/lib/auth";

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "yyyaaassshhh1434@gmail.com",
      password: "12121212",
    },
  });
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "yyyaaassshhh1434@gmail.com",
      password: "12121212",
      name: "yash",
    },
  });
};
