'use server';

import { db } from "@/database/drizzle";
import { AuthCredentials } from "@/types";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";

export const signInWithCredentials  = async (params: Pick<AuthCredentials, "email" | "password">,) => {
    const {email, password} = params;

    try{

        const result = await signIn('credntials', {
            email,password, redirect: false
        })

        if(result?.error){
            return{success:false, error: result.error}
        }

        return {success:true}
    }catch(error){
        console.error("Sign in Error: ",error) 
        return {success:false, error:"Sign in error"}
    }
}

export const signUp = async (params: AuthCredentials) => {
    const {username,email,password} = params

    const existingUser = await db.select()
    .from(users)
    .where(eq(users.email,email))
    .limit(1)

    if(existingUser.length > 0){
        return { success: false, error: "User already exists"};
    }

    const hashedPassword = await hash(password,16)

    try{
        await db.insert(users).values({
            username,
            email,
            password: hashedPassword
        })

        await signInWithCredentials({email,password});

        return {success:true}
    }catch(error){
        console.error("Sign up error: ", error)
        return { success: false, error: "Sign up error"}
    }
};

