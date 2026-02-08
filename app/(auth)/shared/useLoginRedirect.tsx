import {useRouter, useSearchParams} from "next/navigation";
import {getAccessToken} from "@/storage/cookies/auth";
import {toast} from "sonner";
import {HOME_URL} from "@/routes";

export const useLoginRedirect = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const redirectWhenAlreadyLogged = async  () => {
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
        if(isLoginError)
            toast.error("You need to login to access it!")
    }

        return { redirectWhenAlreadyLogged, redirectAfterLogin, checkForAuthErrorAndShowMessage }
}
