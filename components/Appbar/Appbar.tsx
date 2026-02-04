import { ThemeButton } from "../Buttons";
import { SidebarTrigger } from "../ui/sidebar";

export function Appbar() {
  return (
    <div className="w-full h-12.5 flex justify-between items-center px-2 bg-transparent">
      <SidebarTrigger className="text-primary cursor-pointer" />
      <ThemeButton />
    </div>
  );
}
