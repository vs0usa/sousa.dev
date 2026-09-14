import { BracesIcon, GlobeIcon, MailIcon, MapPinIcon } from "lucide-react"
import { MinimalAboutItem } from "./minimal-about-item"

export const MinimalAbout = () => (
  <div className="p-4 space-y-2 border-x">
    <MinimalAboutItem icon={BracesIcon}>
      <p className="text-balance opacity-80">Développeur fullstack</p>
    </MinimalAboutItem>
    <MinimalAboutItem icon={MapPinIcon}>
      <p className="text-balance opacity-80">Paris, France</p>
    </MinimalAboutItem>
    <MinimalAboutItem icon={MailIcon}>
      <a
        href="mailto:vitor@sousa.dev"
        className="text-balance opacity-80 hover:underline underline-offset-4"
      >
        vitor@sousa.dev
      </a>
    </MinimalAboutItem>
    <MinimalAboutItem icon={GlobeIcon}>
      <a
        href="https://sousa.dev"
        className="text-balance opacity-80 hover:underline underline-offset-4"
      >
        sousa.dev
      </a>
    </MinimalAboutItem>
  </div>
)
