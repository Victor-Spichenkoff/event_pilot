import {Metadata} from "next";
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {Suspense} from "react";
import {RegisterForm} from "@/app/(auth)/registerForm";
import Link from "next/link";
import BigLogo from "@/public/logo/eventPilot_sun.png"

export const metadata: Metadata = {
    title: 'EventPilot - Register'
}

export default function RegisterPage() {
    return (
        <div className={"h-full w-full flex justify-center items-center mt-5"}>
            <Card className={"px-8 py-8"}>
                <Image src={BigLogo} alt={"logo"} className={"h-40 w-full rounded-lg shadow-md"}/>
                <Suspense>
                    <RegisterForm/>
                </Suspense>
                <div>
                    <p>Already have an account? <Link href={"/login"} className={"link"}>Make Login here</Link>
                    </p>
                </div>
            </Card>
        </div>
    )
}
