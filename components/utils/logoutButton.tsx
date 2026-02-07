"use client"

import {useRouter} from "next/navigation";
import {logoutCookies} from "@/storage/cookies/auth";
import {clearStorageLastUsedTime} from "@/storage/localStorage/apiConnectionTest";
import {Button} from "@/components/ui/button";

interface ILogoutButton {
    useFullSize?: boolean
}


export const LogoutButton = ({useFullSize}: ILogoutButton) => {
    const router = useRouter()

    const handleLogout = async () => {
        await logoutCookies()
        clearStorageLastUsedTime()
        router.push('/login')
    }

    return (
        <Button
            onClick={() =>handleLogout()}
            variant={"error"}
            className={`shadow-black/30 shadow-md ${useFullSize && "w-full"}`}
        >
            Logout
        </Button>)
}
