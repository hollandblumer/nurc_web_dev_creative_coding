const isProd = process.env.NODE_ENV === "production";
const repo = "nurc_web_dev_creative_coding";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(isProd ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
};

export default nextConfig;
