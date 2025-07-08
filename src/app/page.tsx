import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div>
        <Image
          src="/cat.gif"
          className="rounded-full"
          alt="cat wearing a wig"
          width={200}
          height={200}
          sizes="100vw"
          unoptimized
        />
      </div>
      <div className="flex flex-col items-center sm:gap-y-6 ">
        <h1 className="text-4xl sm:text-6xl font-semibold text-default">rdx</h1>
        <h3 className="text-xl text-subtle screen-lines">w/ .</h3>
      </div>
    </div>
  );
}
