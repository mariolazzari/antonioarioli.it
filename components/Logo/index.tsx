import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
import { LogoProps } from "./LogoProps";

export function Logo({ isDrawer = false, className }: LogoProps) {
  const size = isDrawer ? 128 : 192;

  return (
    <Image
      className={className}
      src={LogoImg}
      alt="logo"
      width={size}
      height={size}
      priority
    />
  );
}
