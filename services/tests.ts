import {handleApiCall} from "@/lib/handleApiCall";

export const testApiWorkService = async () => await handleApiCall({
    endpoint: "/teste",
    config: { timeout: 7_000 }
})
