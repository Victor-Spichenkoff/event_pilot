'use client'

import {Form} from "@/components/ui/form";
import {Card} from "@/components/ui/card";
import {useEffect, useTransition} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {toast} from "sonner";
import {useForm} from "react-hook-form";
import {LoginSchema} from "@/lib/schemas/loginSchema";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormInput} from "@/components/utils/input";
import {Button} from "@/components/ui/button";

export const LoginForm = () => {
    const [isLoading, startTransition] = useTransition()
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const isLoginError = searchParams.get('loginError')
        if(isLoginError) {
            toast.error("You need to login to access it!")
        }
    }, [])

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })


    //TODO:
    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        console.log(data)
        toast.info("Pós")
    }

    return (

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 w-full">
                    <FormInput form={form}
                               name={"email"}
                            // label="Name"
                               placeholder="email"
                               onEnter={form.handleSubmit(onSubmit)}
                    />

                    <FormInput form={form}
                               type={"password"}
                               name={"password"}
                        // label="Password"
                               placeholder="password"
                        // placeholder="****"
                               onEnter={form.handleSubmit(onSubmit)}
                    />

                    <div className="flex justify-center">
                        <Button type="submit" className={"border-2 border-highlight text-white/90 " +
                            "w-full rounded-3xl hover:bg-highlight hover:border-0 text-xl " +
                            "py-2 mb-8"}>Login</Button>
                    </div>
                </form>
            </Form>


    )
}
