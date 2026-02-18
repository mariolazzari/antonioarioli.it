"use client";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

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
        className="flex items-center gap-2 "
        onClick={(e) => e.stopPropagation()}
      >
        {renderIcon()} <span className="">Tema</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{renderButtons()}</DropdownMenuContent>
    </DropdownMenu>
  );
}
