import type { NextConfig } from "next";
import {checkRequiredEnvVariables} from "@/lib/env";

checkRequiredEnvVariables()


const nextConfig: NextConfig = {
    productionBrowserSourceMaps: true,
};

export default nextConfig;
