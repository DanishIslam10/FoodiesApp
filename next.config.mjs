/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: "30mb", // Set the desired size limit
        },
    },
};

export default nextConfig;
