import { BracesIcon, GlobeIcon, MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { MinimalAboutItem } from "@/components/ui/minimal-about-item";

export const MinimalAbout = () => {
  return (
    <div className="p-4 space-y-2 border-x">
      <MinimalAboutItem icon={BracesIcon}>
        <p className="text-balance opacity-70">Développeur fullstack</p>
      </MinimalAboutItem>
      <MinimalAboutItem icon={MapPinIcon}>
        <p className="text-balance opacity-70">Paris, France</p>
      </MinimalAboutItem>
      <MinimalAboutItem icon={MailIcon}>
        <Link
          href="mailto:vitor@sousa.dev"
          className="text-balance opacity-70 hover:underline underline-offset-4"
        >
          vitor@sousa.dev
        </Link>
      </MinimalAboutItem>
      <MinimalAboutItem icon={GlobeIcon}>
        <Link
          href="https://sousa.dev"
          className="text-balance opacity-70 hover:underline underline-offset-4"
        >
          sousa.dev
        </Link>
      </MinimalAboutItem>
    </div>
  );
};
