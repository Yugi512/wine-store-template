"use client";

import AuthForm from "@/components/Authform";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{  userName:"", email: "", password: "" }}
        onSubmit={() => {}}
    />
);

export default Page;