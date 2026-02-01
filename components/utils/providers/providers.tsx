import {ToasterProvider} from "@/components/utils/providers/toastProvider";
import ThemeProvider from "@/components/utils/providers/themeProvider";
import {ReactNode} from "react";

export const Providers = ({children}: { children: ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <ToasterProvider />
            {children}
        </ThemeProvider>
    )
}


