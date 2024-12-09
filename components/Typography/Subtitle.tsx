import { PropsWithChildren } from "react";

export function Subtitle({ children }: PropsWithChildren) {
  return <h3 className="text-center text-2xl my-4">{children}</h3>;
}
