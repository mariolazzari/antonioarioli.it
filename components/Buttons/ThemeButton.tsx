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
      { label: "Chiaro", value: "light", icon: <Sun /> },
      { label: "Scuro", value: "dark", icon: <Moon /> },
      { label: "Sistema", value: "system", icon: <SunMoon /> },
    ].map(({ label, value, icon }) => (
      <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
        {icon} {label}
      </DropdownMenuItem>
    ));
  };

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun />;

      case "dark":
        return <Moon />;

      default:
        return <SunMoon />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-1 -ml-1"
        onClick={(e) => e.stopPropagation()}
      >
        {renderIcon()} Tema
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{renderButtons()}</DropdownMenuContent>
    </DropdownMenu>
  );
}
