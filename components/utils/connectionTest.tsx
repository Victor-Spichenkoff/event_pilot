'use client'

import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {TestApiWorkService} from "@/services/tests";


interface IConnectionTest {
    setLockActions?: (s: boolean) => void
    isSilent?: boolean
}

let attempts = 0
/*
* setNavigationLock → true _> não navega para outras áreas
* */
export const ConnectionTest = ({setLockActions, isSilent}: IConnectionTest) => {
    const [errorToastIds, setErrorToastId] = useState<any[]>([])
    // const isLogged = useIsLogged()//TODO: CONNECTION_TEST

    const handleCancel = () => {
        errorToastIds?.forEach((toastId: number) => {
            toast.dismiss(toastId ?? 1)
        })
        toast.warning("Cancelled", {position: "top-left"})
        if (setLockActions)
            setLockActions(false)
    }

    const actionArea = (
        <div className={"flex gap-x-2 min-w-fit"}>
            <Button
                onClick={handleCancel}
                className={"text-sm border-2 border-red-600 hover:bg-red-700 text-slate-800 " +
                    "dark:border-2 dark:border-red-600 dark:hover:bg-red-700 dark:text-gray-50"}
            >Cancel</Button>
        </div>
    )


    // LOGIC:
    useEffect(() => {
        //TODO: CONNECTION_TEST
        // if (Env.isDevelopment() && isLogged) {
        //     if (setLockActions)
        //         setLockActions(false)
        //     return
        // }

        (async () => {
            console.log(errorToastIds)
            if (!isSilent && !errorToastIds) {
                const toastErrorID = toast.info("Server starting, please wait 1 minute...", {
                    position: "top-left",
                    action: actionArea,
                    duration: 60_000,
                })

                setErrorToastId((current: number[] )=> {
                    if (current?.length == 0 || !current)
                        return [toastErrorID]

                    return [...current, toastErrorID ?? 1]
                })
            }

            const success = await handleTestAgainClick()

            if (success)
                return

            // recursive
            await TryAgain()
            // setTimeout(() => TryAgain(), 5000)
        })()
    }, [])


    const handleTestAgainClick = async () => {
        if (attempts > 12) {
            toast.error("Server didn't started, sorry!", {position: "top-left"})
            return true
        }

        // dont need to load everytime
        //TODO: CONNECTION_TEST
        // const oldTime = getStoreLastUsedTime() ?? 1
        const now = Date.now()

        //Removed, better to remove issues
        // if (oldTime + 1000 * 60 * 10 > now && !Env.isDevOrTest()) {
        //     return true
        // }

        const res = await TestApiWorkService()
        if (res.isError)
            return false

        ///TODO: CONNECTION_TEST
        // storeLastUsedTime(now)

        if (!isSilent)
            toast.info("Server is ready!", {position: "top-left"})

        if (setLockActions)
            setLockActions(false)
        return true
    }


    const TryAgain = async () => {
        attempts++

        const success = await handleTestAgainClick()

        if (success) {
            errorToastIds?.forEach((toastId: number) => {
                toast.dismiss(toastId ?? 1)
            })
            return
        }

        setTimeout(async () => {
            await TryAgain()
        }, 5000)
    }


    return null
}
