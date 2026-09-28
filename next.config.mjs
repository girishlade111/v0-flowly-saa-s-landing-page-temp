/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages subpath. Remove for root-domain / Vercel deploys.
  basePath: "/v0-flowly-saa-s-landing-page-temp",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig