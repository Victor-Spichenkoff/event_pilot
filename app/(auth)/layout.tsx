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
        <div className={"flex flex-col h-screen"}>
            <Header
                title={title}
                hideMenu
                hideProfile
            />

            <main className={"flex-1"}>{children}</main>

            <Footer />
        </div>
    )
}
