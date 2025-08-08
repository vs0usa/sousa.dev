import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ComponentProps } from "react"
import { cn } from "@/utils/cn"

type Props = ComponentProps<typeof Link> & {
  name: string
  img: string
  username: string
}

export const SocialsCard = ({
  className,
  name,
  img,
  username,
  ...props
}: Props) => (
  <Link
    className={cn(
      "sm:border-x p-4 pr-2 flex items-center gap-4 select-none group/link screen-lines odd:before:hidden even:sm:before:hidden odd:border-l-0 even:border-r-0",
      className,
    )}
    {...props}
  >
    <div className="relative">
      <Image
        src={img}
        className="rounded-xl"
        width={48}
        height={48}
        alt={name}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/8 ring-inset" />
    </div>
    <div className="flex-1">
      <h3 className="font-medium group-hover/link:underline underline-offset-4">
        {name}
      </h3>
      <p className="text-subtle text-xs font-mono">{username}</p>
    </div>
    <ArrowUpRight className="stroke-subtle size-5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
  </Link>
)
