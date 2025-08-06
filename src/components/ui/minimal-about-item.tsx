import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  children: React.ReactNode;
};

export const MinimalAboutItem = ({ icon: Icon, children }: Props) => {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-subtle inset-shadow-[1px_1px_1px,0px_0px_2px] inset-shadow-white/15">
        <Icon className="size-4 stroke-subtle" />
      </div>
      {children}
    </div>
  );
};
