import {useTheme} from "next-themes";
import {Toaster} from "sonner";

export const ToasterProvider = () => {
    const { theme } = useTheme()

    if(theme != "light" && theme != "dark")
        return (
            <Toaster richColors closeButton position={"top-right"} duration={2000} theme={"system"}/>
        )

    return (
        <Toaster richColors closeButton position={"top-right"} duration={2000} theme={theme}/>
    )
}
