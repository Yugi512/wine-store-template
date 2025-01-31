"use client"

interface NavBarProps {
    pathName: string;
}

import React from "react"
import Link from "next/link"

const NavBar: React.FC<NavBarProps> = ({ pathName })=> {
    return (
        <section className="flex justify-center">
                <ul className="flex flex-row items-center gap-8 flex h-20 text-2xl">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link href="/staff-pick">Staff Pick</Link>
                        </li>
                    </ul>
        </section>
    )
}

export default NavBar;