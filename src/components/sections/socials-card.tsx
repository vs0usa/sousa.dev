import type { ComponentProps } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/utils/cn"

type Props = ComponentProps<"a"> & {
  name: string
  img: string
  username: string
}

export const SocialsCard = ({ className, name, img, username, ...props }: Props) => (
  <a
    className={cn(
      "sm:border-x p-4 pr-2 flex items-center gap-4 select-none group/link screen-lines odd:before:hidden even:sm:before:hidden odd:border-l-0 even:border-r-0 last:after:hidden sm:after:hidden",
      className,
    )}
    rel="me noopener noreferrer"
    {...props}
  >
    <div className="relative">
      <img
        src={img}
        className="rounded-xl"
        width={48}
        height={48}
        alt={name}
        loading="lazy"
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/8 ring-inset" />
    </div>
    <div className="flex-1">
      <p className="font-medium group-hover/link:underline underline-offset-4">{name}</p>
      <p className="text-subtle text-xs font-mono">{username}</p>
    </div>
    <ArrowUpRight className="stroke-subtle size-5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
  </a>
)
