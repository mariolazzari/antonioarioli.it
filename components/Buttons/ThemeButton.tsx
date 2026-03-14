"use client";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "../ui/sidebar";

export function ThemeButton() {
  const { setTheme, theme } = useTheme();
  const { open } = useSidebar();

  const renderButtons = () => {
    return [
      { label: "Chiaro", value: "light", icon: <Sun size={16} /> },
      { label: "Scuro", value: "dark", icon: <Moon size={16} /> },
      { label: "Sistema", value: "system", icon: <SunMoon size={16} /> },
    ].map(({ label, value, icon }) => (
      <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
        {icon} {label}
      </DropdownMenuItem>
    ));
  };

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={16} />;

      case "dark":
        return <Moon size={16} />;

      default:
        return <SunMoon size={16} />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-2 ml-2 mt-2"
        onClick={e => e.stopPropagation()}
      >
        {renderIcon()} {open && <span className="text-md">Tema</span>}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{renderButtons()}</DropdownMenuContent>
    </DropdownMenu>
  );
}
