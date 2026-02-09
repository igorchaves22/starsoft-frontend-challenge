import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "softstar.s3.amazonaws.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
