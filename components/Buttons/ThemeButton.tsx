"use client";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const items = [
  { value: "light", icon: <Sun size={16} /> },
  { value: "dark", icon: <Moon size={16} /> },
  { value: "system", icon: <SunMoon size={16} /> },
];

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <ToggleGroup
      className="mx-auto"
      type="single"
      size="sm"
      value={theme}
      variant="outline"
    >
      {items.map(({ value, icon }) => (
        <ToggleGroupItem
          value={value}
          aria-label={value}
          onClick={e => {
            e.stopPropagation();
            setTheme(value);
          }}
        >
          {icon}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
