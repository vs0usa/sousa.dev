import type { ComponentProps } from "react"
import { LinePattern } from "@/components/patterns/line-pattern"
import { cn } from "@/utils/cn"

export const Separator = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("h-8 relative screen-lines border-x", className)}
      {...props}
    >
      <LinePattern className="-left-[100vw] w-[200vw]" />
    </div>
  )
}
