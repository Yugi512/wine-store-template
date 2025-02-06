import { ReactNode } from "react";
import Image from "next/image";
import {auth} from "@/auth"
import { redirect } from "next/navigation";

const Layout = async ({children}: {children:ReactNode}) => {
    //later we configure the active session and user logins for now display info
    // const session = await auth();

    // if (session) redirect("/my-profile");

    return (
        <main>
            <div className="relative flex flex-col-reverse text-light-100 sm:flex-row">
                <section className="my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-dark-100 px-5 py-10">
                    <div className="gradient-vertical mx-auto bg-blue-900 flex max-w-xl flex-col gap-6 rounded-lg p-10" >
                        <div>
                            <h1 className="text-white">Blueberry's wine shop</h1>
                        </div>
                        <div>
                            {children}
                        </div>
                        
                    </div>
                    
                </section>
                <section>  
                    <Image src="https://images.squarespace-cdn.com/content/v1/55ea5e29e4b0b8a6d100f546/1617148532758-4WEFPK2C2H30ZKI8A01L/kimfetrow2020_DSC_7996.jpg" alt="image-auth"
                    width={800}
                    height={800}
                    className="size-full object-cover object-[55%]"/>
                </section>
            </div>
        </main>
    )
}

export default Layout;