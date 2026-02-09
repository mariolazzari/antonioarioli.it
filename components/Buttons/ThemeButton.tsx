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
      <DropdownMenuTrigger asChild>
        <Button
          className="text-primary cursor-pointer"
          variant="ghost"
          size="icon"
          aria-label="Selected theme"
        >
          {renderIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{renderButtons()}</DropdownMenuContent>
    </DropdownMenu>
  );
}
