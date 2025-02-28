import {z} from "zod"

export const signUpSchema = z.object({
    username: z.string().min(3).max(24),
    email: z.string().email(),
    password: z.string().min(6).max(24),
})

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(24),
})

// export const winesSchema 

// export const reviewsSchema

// export const spiritsSchema