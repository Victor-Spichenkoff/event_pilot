import {getAccessToken} from "@/storage/cookies/auth";
import {useEffect, useState} from "react";

export const useIsLogged = () => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect( () => {
        (async ()=>{
            const accessToken = await getAccessToken()
            if(accessToken)
                return setIsLogged(true)

            return setIsLogged(false)
        })()
    }, [])


    return isLogged
}
