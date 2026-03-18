"use client";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { MouseEventHandler } from "react";

const items = [
  { value: "light", icon: <Sun size={16} /> },
  { value: "dark", icon: <Moon size={16} /> },
  { value: "system", icon: <SunMoon size={16} /> },
];

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

  const onItemCLick: MouseEventHandler<HTMLButtonElement> = e =>
    e.stopPropagation();

  return (
    <ToggleGroup
      className="mx-auto"
      type="single"
      size="sm"
      value={theme}
      onValueChange={setTheme}
      variant="outline"
    >
      {items.map(({ value, icon }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          aria-label={value}
          onClick={onItemCLick}
        >
          {icon}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
