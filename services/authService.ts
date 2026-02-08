import {handleApiCall} from "@/lib/handleApiCall";
import {AuthResponse} from "@/app/(auth)/shared/authResponse";
import {BasicUser} from "@/types/User";

const login = async (email: string, password: string) =>
    handleApiCall<AuthResponse>({
        endpoint: "/auth/login",
        body: {email, password},
        method: "post"
    })

const register = async (name: string, email: string, password: string) =>
    handleApiCall<BasicUser>({
        endpoint: "/auth/register",
        body: {name, email, password},
        method: "post"
    })


export const authService = {
    login,
    register,
}
