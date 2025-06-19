import { ModeToggle } from "./modeToggle";

export function Header() {
  return (
    <header className="absolute top-0 right-0 flex justify-end items-center p-4">
      <ModeToggle />
    </header>
  );
}
