import * as z from "zod"

export const LoginSchema = z.object({
    email: z.email("Inform a valid email").max(120, {message: "Email can't be longer than 120"}),
    password: z.string().min(6, {message: "Use at least 6 characters"}).max(12, {message: "Password can't be longer than 12"}),
})
