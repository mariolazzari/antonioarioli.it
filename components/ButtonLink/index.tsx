import Link from "next/link";
import { ButtonLinkProps } from "./ButtonLinkProps";
import { Button } from "../ui/button";

export function ButtonLink({
  href,
  label,
  icon,
  newTab = false,
}: ButtonLinkProps) {
  const target = newTab ? "_blank" : "_self";

  return (
    <Link key={href} href={href} target={target}>
      <Button className="font-semibold w-36" aria-label={label}>
        {icon} {label}
      </Button>
    </Link>
  );
}
