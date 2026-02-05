import {ConnectionTest} from "@/components/utils/connectionTest";
import {LoginForm} from "@/app/(auth)/loginForm";

export const metadata = {
    title: 'Login'
}

export default function LoginPage() {
    return (
        <div className={"h-full w-full flex justify-center items-center bg-red-500"}>
            <ConnectionTest/>
            <LoginForm />
        </div>
    )
}
