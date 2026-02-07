import {LoginForm} from "@/app/(auth)/loginForm";
import {Metadata} from "next";
import {Card} from "@/components/ui/card";
import Link from "next/link";
import {Suspense} from "react";
import Image from "next/image";
import BigLogo from "@/public/logo/eventPilot_sun.png";
import {Loading} from "@/components/template/loading";

export const metadata: Metadata = {
    title: 'EventPilot - Login'
}

export default function LoginPage() {
    return (
        <div className={"h-full w-full flex justify-center items-center mt-5"}>
            <Card className={"px-8 py-8"}>
                <Image src={BigLogo} alt={"logo"} className={"h-40 w-full rounded-lg shadow-md"}/>
                <Suspense>
                    <LoginForm/>
                </Suspense>
                <div>
                    <p>Don&#39;t have an account? <Link href={"/signup"} className={"link"}>Create here</Link>
                    </p>
                </div>
            </Card>
        </div>
    )
}
