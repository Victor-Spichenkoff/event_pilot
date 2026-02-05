import {getAccessToken} from "@/storage/cookies/auth";
import {useEffect, useState} from "react";

export const useIsLogged = () => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect( () => {
        (async ()=>{
            // IF want to use to refresh token:
            // const expiresAt: any = await getAccessToken()
            // if(new Date(expiresAt?.value) > new Date())
            const accessToken = await getAccessToken()
            if(accessToken)
                return setIsLogged(true)

            return setIsLogged(false)
        })()
    }, [])


    return isLogged
}
