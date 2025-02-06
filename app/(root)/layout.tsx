import { ReactNode } from "react";
import Headers from "@/components/headers";
import { auth } from "@/auth";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";


const Layout = async ({children}: {children:ReactNode}) => {
    // const session = await auth()
    // if(!session) redirect("/")
    return (
        <main>
            <div className="root container text-r grid grid-cols-1">
                <Headers />
                <div>{children}</div>
            </div>
        </main>
    )
}

export default Layout;