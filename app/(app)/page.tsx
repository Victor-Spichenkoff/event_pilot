import {ThemeToggle} from "@/components/utils/themeToggle";
import {ThemePlayground} from "@/components/template/themePlayground";
import Link from "next/link";
import {Header} from "@/components/template/header";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <ThemeToggle/>
            <div>
                <Link href={"/checkIn/online"}>Check in online</Link>
                {/*<Link href={""}>Check in online</Link>*/}
                {/*<Link href={""}>Check in online</Link>*/}
                {/*<Link href={""}>Check in online</Link>*/}

            </div>

            <div>
                <p className={"text-3xl font-playfair"}>Gearara</p>
                <p className={"text-xl font-sans"}>Gearara</p>

                <br/><br/>
                <p className={"text-3xl font-dm-sans"}>Gearara</p>
                <p className={"text-xl font-roboto"}>Gearara</p>
            </div>

            <ThemePlayground/>
        </div>
    );
}
