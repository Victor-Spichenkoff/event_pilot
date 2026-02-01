import {ThemeToggle} from "@/components/utils/themeToggle";
import {ThemePlayground} from "@/components/template/themePlayground";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <ThemeToggle/>

            <ThemePlayground/>
        </div>
    );
}
