import Image from "next/image";
import { VSousaLogo } from "@/components/icons/vs0usa-logo";
import { DotPattern } from "@/components/patterns/dot-pattern";
import { LinePattern } from "@/components/patterns/line-pattern";
import { FlipFlags } from "@/components/ui/flip-flags";
import { FlipText } from "@/components/ui/flip-text";
import { MinimalAbout } from "@/components/ui/minimal-about";
import { Separator } from "@/components/ui/separator";
import { Socials } from "@/components/ui/socials";

export default function Page() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="relative h-64 border-x flex items-center justify-center">
        <DotPattern />
        <VSousaLogo className="h-20" />
      </div>
      <div className="flex screen-lines after:hidden">
        <div className="border-x my-px p-[3] relative overflow-clip">
          <FlipFlags />
          <Image
            className="rounded-full size-24 md:size-40 ring ring-offset-2 ring-offset-default ring-neutral-700 z-40 min-w-24 object-cover md:min-w-40"
            src="/photo.jpg"
            width={256}
            height={256}
            alt="Vitor Sousa's photo"
          />
        </div>
        <div className="border-r w-full flex justify-end flex-col overflow-y-hidden">
          <div className="relative flex grow items-end">
            <LinePattern />
            <p className="z-10 text-subtle/10 text-xs pl-4 font-mono line-clamp-1">
              z-10 text-subtle/10 text-xs pl-4 font-mono line-clamp-1
            </p>
          </div>
          <h3 className="pl-4 border-y text-3xl font-semibold py-1">
            Vitor Sousa
          </h3>
          <FlipText
            className="pl-4 text-subtle py-1 font-mono text-sm"
            items={["Développeur fullstack", "Écrire le monde en lignes"]}
          />
        </div>
      </div>
      <Separator />
      <MinimalAbout />
      <Separator />
      <Socials />
    </div>
  );
}
