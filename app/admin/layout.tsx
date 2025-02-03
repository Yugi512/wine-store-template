import React, { ReactNode } from "react";

const Layout = ({children} : {children: ReactNode}) => { 
    return (
        <div className="container">
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;