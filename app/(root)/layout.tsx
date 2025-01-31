import { ReactNode } from "react";
import Headers from "@/components/headers";

const Layout = ({children}: {children:ReactNode}) => {
    return (
        <main>
            <div className="root container text-center">
                <Headers />
                <div>{children}</div>
            </div>
        </main>
    )
}

export default Layout