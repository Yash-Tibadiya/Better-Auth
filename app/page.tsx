import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen px-5 text-center">
      <Image
        src="/images/better-auth-starter.png"
        alt="Better Auth"
        width={100}
        height={100}
        className="rounded-lg dark:invert"
      />

      <h1 className="text-4xl font-bold">Better Auth Starter</h1>

      <div className="max-w-[600px] mx-auto">
        <p className="text-lg">
          This is a starter project for Better Auth. It is a simple project that
          uses Better Auth to authenticate users.
        </p>
      </div>

      <div className="flex gap-2">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/signup">
          <Button>Signup</Button>
        </Link>
      </div>
    </div>
  );
}
