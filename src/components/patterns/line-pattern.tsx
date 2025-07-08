import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

export const LinePattern = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "absolute inset-0 bg-size-[10px_10px] [--pattern-foreground:var(--border-default)]/56 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]",
      className,
    )}
    {...props}
  />
);
