'use client'

import {Form} from "@/components/ui/form";
import {Card} from "@/components/ui/card";
import {useEffect, useTransition} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {toast} from "sonner";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormInput} from "@/components/utils/input";
import {Button} from "@/components/ui/button";
import {authService} from "@/services/authService";
import {saveAccessToken} from "@/storage/cookies/auth";
import {Env} from "@/lib/env";
import {useLoginRedirect} from "@/app/(auth)/shared/useLoginRedirect";
import {Loading} from "@/components/template/loading";
import {RegisterSchema} from "@/lib/schemas/signUpSchema";

export const RegisterForm = () => {
    const [isLoading, startTransition] = useTransition()
    const {
        redirectWhenAlreadyLogged,
        makeLoginAndShowMessages,
        checkForAuthErrorAndShowMessage } = useLoginRedirect()


    useEffect(() => {
        redirectWhenAlreadyLogged().then()
        checkForAuthErrorAndShowMessage()
    }, [])

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: Env.isDev ? "Joe" : "",
            email: Env.isDev ? "user@mail.com" : "",
            password: Env.isDev ? "123456" : "",
        },
    })


    const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
        startTransition(async () =>{
            const result = await authService.register(data.name, data.email, data.password)
            if(result.isError) {
                toast.error(result.errorMessage)
                return
            }
            toast.success("Register successfully")

            await makeLoginAndShowMessages(result.response.email, data.password)
        })
    }

    return (<>
        { isLoading && <Loading /> }

        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 w-full">
                <FormInput form={form}
                           name={"name"}
                           placeholder="name"
                           onEnter={form.handleSubmit(onSubmit)}
                />

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
                        "py-2 mb-8"}>Create</Button>
                </div>
            </form>
        </Form>
    </>)
}
