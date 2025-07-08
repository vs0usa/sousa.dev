import { VSousaLogo } from "@/components/icons/vs0usa-logo";

export const Navbar = () => {
  return (
    <header className="sticky inset-0 top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2">
      <div className="mx-auto flex h-12 items-center justify-between gap-2 px-2 screen-lines border-x border-default sm:gap-4 md:max-w-3xl">
        <VSousaLogo className="fill-white h-6" />
      </div>
    </header>
  );
};
