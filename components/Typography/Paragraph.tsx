import { PropsWithChildren } from "react";

export function Paragraph({ children }: PropsWithChildren) {
  return <p className="text-justify">{children}</p>;
}
