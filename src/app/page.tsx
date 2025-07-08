import { VSousaLogo } from "@/components/icons/vs0usa-logo";
import { DotPattern } from "@/components/patterns/dot-pattern";
import { LinePattern } from "@/components/patterns/line-pattern";

export default function Page() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="relative h-64 border-x flex items-center justify-center">
        <DotPattern />
        <VSousaLogo className="h-20" />
      </div>
      <div className="flex screen-lines">
        <div className="border-x my-px p-[3]">
          <span className="block rounded-full size-32 md:size-40 bg-amber-900 ring ring-offset-2 ring-offset-default ring-neutral-600 z-40" />
        </div>
        <div className="border-r w-full flex justify-end flex-col">
          <div className="relative flex grow items-end">
            <LinePattern />
            <p className="z-10 text-subtle/10 text-xs pl-4 font-mono line-clamp-1">
              z-10 text-subtle/10 text-xs pl-4 font-mono
            </p>
          </div>
          <h3 className="pl-4 border-y text-3xl font-semibold py-1">
            Vitor Sousa
          </h3>
          <p className="pl-4 text-subtle py-1">Software Developer</p>
        </div>
      </div>
    </div>
  );
}
