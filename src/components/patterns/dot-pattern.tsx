import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

export const DotPattern = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "absolute inset-0 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center bg-white/0.75 [--pattern-foreground:var(--color-white)]/5",
      className,
    )}
    {...props}
  />
);
