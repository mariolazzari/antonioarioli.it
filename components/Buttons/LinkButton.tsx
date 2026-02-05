import Link from "next/link";
import { Button } from "../ui/button";
import { LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  className?: string;
};

export function LinkButton({ href, className = "" }: Props) {
  return (
    <Link href={href} target="_blank">
      <Button
        className={cn("cursor-pointer text-primary", className)}
        variant="ghost"
        size="icon"
      >
        <LinkIcon />
      </Button>
    </Link>
  );
}
