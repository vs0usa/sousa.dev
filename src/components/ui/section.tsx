import { cn } from "@/utils/cn"

type Props = {
  title: string
  className?: string
  children: React.ReactNode
}

export const Section = ({ title, className, children }: Props) => (
  <section className="border-x">
    <h3 className="px-4 screen-lines before:hidden text-3xl font-semibold">
      {title}
    </h3>
    <div className={cn("p-4 text-sm *:opacity-80", className)}>{children}</div>
  </section>
)
