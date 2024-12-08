import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <h2 className="text-center text-4xl font-semibold text-primary my-8">
      {children}
    </h2>
  );
}
