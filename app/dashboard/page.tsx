import { Logout } from "@/components/logout";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Welcome to your dashboard!</h1>
      <Logout />
    </div>
  );
}
