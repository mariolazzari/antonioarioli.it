import { ThemeToggle } from "../Theme/ThemeToggle";
import { Separator } from "../ui/separator";
import { Drawer } from "./Drawer";
import { Links } from "./Links";

export const Header = () => {
  return (
    <>
      <header className="h-[50px] flex justify-center items-center px-2">
        <nav className="flex justify-between items-center w-full">
          <ThemeToggle />
          <Links />
          <Drawer />
        </nav>
      </header>
      <Separator className="h-0.5 bg-muted" />
    </>
  );
};
