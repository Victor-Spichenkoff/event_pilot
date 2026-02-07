import {handleApiCall} from "@/lib/handleApiCall";
import {AuthResponse} from "@/app/(auth)/shared/authResponse";

const login =async (email: string, password: string) =>
    handleApiCall<AuthResponse>({
        endpoint: "/auth/login",
        body: { email, password },
        method: "post"
    })



export const authService = {
    login
}
