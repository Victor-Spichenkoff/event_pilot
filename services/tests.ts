import {handleApiCall} from "@/lib/handleApiCall";

export const TestApiWorkService = async () => await handleApiCall({
    endpoint: "/teste",
    config: { timeout: 7_000 }
})
