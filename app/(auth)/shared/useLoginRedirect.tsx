import {useRouter, useSearchParams} from "next/navigation";
import {getAccessToken, saveAccessToken} from "@/storage/cookies/auth";
import {toast} from "sonner";
import {HOME_URL} from "@/routes";
import {authService} from "@/services/authService";

export const useLoginRedirect = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const redirectWhenAlreadyLogged = async () => {
        const token = await getAccessToken()
        if (!token)
            return

        const previous = searchParams.get('previous')
        const pathname = previous ?? HOME_URL

        router.push(pathname)
    }

    const redirectAfterLogin = () => {
        const previous = searchParams.get('previous')
        const pathname = previous ?? HOME_URL

        router.push(pathname)
    }

    const checkForAuthErrorAndShowMessage = () => {
        const isLoginError = searchParams.get('loginError')
        if (isLoginError)
            toast.error("You need to login to access it!")
    }

    const makeLoginAndShowMessages = async (email: string, password: string) => {
        const result = await authService.login(email,password)
        if(result.isError) {
            toast.error(result.errorMessage)
            return
        }

        await saveAccessToken(result.response.token, result.response.expiresAt)

        toast.success("Login successfully")
        redirectAfterLogin()
    }

    return {
        redirectWhenAlreadyLogged,
        redirectAfterLogin,
        checkForAuthErrorAndShowMessage,
        makeLoginAndShowMessages
    }
}
