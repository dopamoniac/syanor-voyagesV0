/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Pages does not support the default Next.js image optimizer.
    // Unoptimized keeps images portable and avoids runtime image API.
    unoptimized: true,
  },
};

export default nextConfig;
