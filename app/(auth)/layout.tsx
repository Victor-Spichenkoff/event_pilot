'use client'

import {ReactNode} from "react";
import {Header} from "@/components/template/header";
import {usePathname} from "next/navigation";
import {AUTH_HEADER_TITLES} from "@/utils/headerTitleMap";
import {Footer} from "@/components/template/footer";

export default function AppLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname() as "/login" | "/signup"
    const title = AUTH_HEADER_TITLES[pathname] ?? ''


    return (
        <>
            <Header
                title={title}
                hideMenu
                hideProfile
            />

            <main>{children}</main>

            <Footer />
        </>
    )
}
