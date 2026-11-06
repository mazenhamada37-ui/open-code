/** @type {import('next').NextConfig} */
const nextConfig = {
  // For GitHub Pages: change to `basepath: "/glass-profile"`
  // and remove `output` if using a server; keep `export` for static hosting.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
