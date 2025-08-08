import type { ComponentProps } from "react"
import { SocialsCard } from "@/components/ui/socials-card"
import { cn } from "@/utils/cn"

export const Socials = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("", className)} {...props}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 border-x">
        <SocialsCard
          name="LinkedIn"
          href="https://www.linkedin.com/in/vitor-gomes-de-sousa/"
          img="/linkedin.webp"
          username="vitor-gomes-de-sousa"
        />
        <SocialsCard
          name="GitHub"
          href="https://github.com/vs0usa"
          img="/github.webp"
          username="vs0usa"
        />
      </div>
    </div>
  )
}
