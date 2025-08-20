import Image from "next/image"
import Link from "next/link"
import { DotPattern } from "@/components/patterns/dot-pattern"

type Props = {
  name: string
  items: { name: string; url: string; icon: string }[]
  className?: string
}

export const StackSection = ({ name, items }: Props) => (
  <div className="flex relative">
    <p className="absolute left-0 top-0 z-20 font-mono text-xs px-2 py-1 block sm:hidden">
      {name}
    </p>
    <div className="p-2 pl-4 border-r relative items-center hidden sm:flex min-w-28">
      <p className="font-mono text-base">{name}</p>
    </div>
    <div className="flex flex-wrap gap-4 select-none items-center p-2 pr-4 w-full relative max-sm:pt-6">
      {items.map(({ name, url, icon }) => (
        <Link
          key={name}
          href={url}
          className="hover:opacity-80 hover:cursor-pointer transition-opacity z-10"
        >
          <Image
            className="max-h-7"
            src={`brands/${icon}.svg`}
            alt={name}
            width={28}
            height={28}
          />
        </Link>
      ))}
      <DotPattern />
    </div>
  </div>
)
