"use client";

import AuthForm from "@/components/Authform";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{ username: "", email: "", password: ""}}
        onSubmit={signUp}
    />
);

export default Page;