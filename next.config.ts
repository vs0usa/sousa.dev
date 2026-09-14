import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"
import type { NextConfig } from "next"

initOpenNextCloudflareForDev()

const nextConfig: NextConfig = {
  experimental: {
    // TypeScript 7 (native port) no longer exposes the compiler API Next.js
    // uses for type checking, so defer to the tsc CLI instead.
    useTypeScriptCli: true,
  },
}

export default nextConfig
