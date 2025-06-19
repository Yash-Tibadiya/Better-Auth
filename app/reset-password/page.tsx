import { ResetPasswordForm } from "@/components/forms/reset-password-form";
import Image from "next/image";
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6 md:max-w-md">
        <Link
          href="/"
          className="flex items-center gap-3 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-md">
            <Image
              width={50}
              height={50}
              src={"/images/better-auth-starter.png"}
              alt="Better Auth Starter Logo"
              className="rounded-md dark:invert"
              priority
            />
          </div>
          <span className="text-3xl font-bold">Acme Inc</span>
        </Link>
        <ResetPasswordForm />
      </div>
    </div>
  );
}
