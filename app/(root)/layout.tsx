import { ReactNode } from "react";
import Headers from "@/components/headers";

const Layout = ({children}: {children:ReactNode}) => {
    return (
        <main>
            <div className="root container text- grid grid-cols-1">
                <Headers />
                <div>{children}</div>
            </div>
        </main>
    )
}

export default Layout;