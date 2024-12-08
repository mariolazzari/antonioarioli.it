import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="max-w-xl mx-auto my-4 p-4 bg-gradient-to-br from-background to-muted rounded-xl shadow-xl border border-muted">
      {children}
    </div>
  );
}
