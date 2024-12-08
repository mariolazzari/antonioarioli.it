import { ReactNode } from "react";

export type ButtonLinkProps = {
  label: string;
  href: string;
} & Partial<{
  icon: ReactNode;
  newTab: boolean;
}>;
