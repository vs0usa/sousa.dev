import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-x-36 bg-black">
      <div>
        <Image
          src="/cat.gif"
          width={200}
          height={200}
          className="rounded-full"
          alt="cat wearing a wig"
        />
      </div>
      <div className="flex flex-col items-center gap-y-6 text-gray-100">
        <h1 className="text-6xl font-semibold">rdx</h1>
        <h3 className="text-xl">w/.</h3>
      </div>
    </main>
  )
}
