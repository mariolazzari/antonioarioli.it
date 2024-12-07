import { Home } from "lucide-react";
import Link from "next/link";
import { LinksProps } from "./LinksProps";
import { DialogClose } from "@radix-ui/react-dialog";

export function Links({ isDrawer = false }: LinksProps) {
  const links = [{ label: "Home", href: "/", icon: <Home /> }];

  return (
    <ul className={isDrawer ? "flex flex-col gap-4 mt-8" : "flex gap-2"}>
      {links.map(({ label, href, icon }) => (
        <li key={href}>
          <Link href={href}>
            {isDrawer ? (
              <DialogClose className="flex gap-2">
                {icon} {label}
              </DialogClose>
            ) : (
              <span className="flex gap-2">
                {icon} {label}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
