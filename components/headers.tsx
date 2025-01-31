"use client"

import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Headers = () => {
    //
    const pathName = usePathname()
    // center the navbar and the title of the website
    return(
            <div className="flex flex-col bg-blue-950 text-gray-100 w-full h-40 absolute justify-center"> 
                <Avatar className="float-right t-0 r-0">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <header className="text-center bold text-4xl p-4">
                    <h1>Blueberry's wine store website template</h1>
                </header>
                <NavBar pathName={pathName}/>
            </div>
    )
}

export default Headers;