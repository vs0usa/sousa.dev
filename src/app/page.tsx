import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen items-center justify-center gap-y-8 sm:gap-x-36 bg-black">
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
      <div className="flex flex-col items-center sm:gap-y-6 text-gray-100">
        <h1 className="text-4xl sm:text-6xl font-semibold">rdx</h1>
        <h3 className="text-xl">w/.</h3>
      </div>
    </main>
  );
}
