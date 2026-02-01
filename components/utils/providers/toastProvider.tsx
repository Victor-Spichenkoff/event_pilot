import {useTheme} from "next-themes";
import {Toaster} from "sonner";
import {cookies} from "next/headers";

export const ToasterProvider = async () => {
    // const { theme } = useTheme()

    const cookieStore = await cookies();
    // Get the stored theme value from the cookie
    const theme = cookieStore.get('theme')?.value || 'system';
    if(theme != "light" && theme != "dark")
        return (
            <Toaster richColors closeButton position={"top-right"} duration={2000} theme={"system"}/>
        )

    return (
        <Toaster richColors closeButton position={"top-right"} duration={2000} theme={theme}/>
    )
}
