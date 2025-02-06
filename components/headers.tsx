"use client"

import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Session } from "next-auth";
import { getInitials } from "@/lib/utils";
// {session}: {session: Session} this should go in the params for headers but not now as we need to fix the user info and page but thats for later, fix it add more infor to then redirect to my profile to see info on address payment methods email and password and then past orders 
const Headers = () => {
    //
    const pathName = usePathname()
    // center the navbar and the title of the website
    return(
        <div >
            <div className="flex flex-col bg-blue-950 text-gray-100 w-full h-40 absolute justify-center">
                {/* <li>
                    <Link href="/my-profile">
                    <Avatar>
                        <AvatarFallback>
                            {getInitials(session?.user?.name ?? "IN")}
                        </AvatarFallback>
                    </Avatar>
                    </Link>
                </li> */}
                <header className="text-center bold text-4xl p-4">
                    <h1>Blueberry's wine store website template</h1>
                </header>
                <NavBar pathName={pathName}/>
            </div>
        </div>
    )
}

export default Headers;