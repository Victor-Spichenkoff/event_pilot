'use client'

import {Header} from "@/components/template/header";
import {ReactNode, useState} from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Header
                title={"HOME"}
                onMenuToggle={() => setMenuOpen(v => !v)}
            />
            {menuOpen&& (
                <div>
                {/*<SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />*/}
                    SIDE MENU HERE!
                </div>
            )}
            <main>{children}</main>
        </>
    )
}
