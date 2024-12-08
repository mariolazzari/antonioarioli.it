import { Home, User, GraduationCap, LinkIcon } from "lucide-react";
import Link from "next/link";
import { LinksProps } from "./LinksProps";
import { DialogClose } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

export function Links({ isDrawer = false }: LinksProps) {
  const iconSize = isDrawer ? 32 : 24;
  const links = [
    { label: "Home", href: "/", icon: <Home size={iconSize} /> },
    { label: "Biografia", href: "/bio", icon: <User size={iconSize} /> },
    {
      label: "Corsi",
      href: "/courses",
      icon: <GraduationCap size={iconSize} />,
    },
    {
      label: "Contatti",
      href: "/contacts",
      icon: <LinkIcon size={iconSize} />,
    },
  ];

  const renderItem = (icon: ReactNode, label: string) => {
    if (isDrawer) {
      return (
        <DialogClose className="flex items-center gap-2 text-xl">
          {icon} {label}
        </DialogClose>
      );
    }

    return (
      <span className="flex gap-2 text-lg">
        {icon} {label}
      </span>
    );
  };

  return (
    <ul
      className={isDrawer ? "flex flex-col gap-4 mt-8" : "hidden md:flex gap-2"}
    >
      {links.map(({ label, href, icon }) => (
        <li key={href}>
          <Link href={href}>{renderItem(icon, label)}</Link>
        </li>
      ))}
    </ul>
  );
}
