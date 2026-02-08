import * as z from "zod"

export const RegisterSchema = z.object({
    name: z.string().min(2, "Name must have at least 2 characters").max(120, {message: "Name can't be longer than 120 characters"}),
    email: z.email("Inform a valid email").max(120, {message: "Email can't be longer than 120"}),
    password: z.string().min(6, {message: "Use at least 6 characters"}).max(12, {message: "Password can't be longer than 12 characters"}),
})
