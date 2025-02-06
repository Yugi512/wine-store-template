import React, { ReactNode } from "react";
import {auth} from "@/auth"
import { redirect } from "next/navigation";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

// amdin page isnt working needs to be fixed so that it isnt redirecting towards the wine store home page but rather the admin webpage
const Layout = async ({children} : {children: ReactNode}) => {

    const session = await auth();
    if(!session?.user?.id) redirect("/sign-in")
    
    const isAdmin = await db
        .select({isAdmin: users.role})
        .from(users)
        .where(eq(users.id, session.user.id))
        .limit(1)
        .then((res) => res[0]?.isAdmin === "ADMIN")
    
    if(!isAdmin) redirect("/")
    
    return (
        <main className="flex min-h-screen w-full flex-row">
            <p>SideBar</p>

            <br/>
            <div className="flex w-[calc(100%-264px)] flex-1 flex-col bg-gray-900 p-5 xs:p-10;">
                <div>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout;