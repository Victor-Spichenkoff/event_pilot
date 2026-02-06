import {LoginForm} from "@/app/(auth)/loginForm";
import {Metadata} from "next";
import {Card} from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'EventPilot - Login'
}

export default function LoginPage() {
    return (
        <div className={"h-full w-full flex justify-center items-center "}>
            <Card className={"px-8 pb-8 pt-12 "}>
            <LoginForm />
                <div>
                    <p>Don&#39;t have an account? <Link href={"/signup"} className={"link"}>Create here</Link>
                    </p>
                </div>
            </Card>
        </div>
    )
}
