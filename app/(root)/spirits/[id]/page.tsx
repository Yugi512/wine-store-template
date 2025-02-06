import SpiritCard from "@/components/SpiritsCard";
import Spirit from "@/components/WineCard";
import { dummySpirits } from "@/constants/dummySpirits";
import React from "react"

const Page = async ({params} : {params: Promise<{ id: number }>}) => {
    const id = (await params).id
    const bottle = dummySpirits[id-1];

    if (!bottle) {
        return <div>Spirit not found</div>;
    }
    return (
        <div>
            <SpiritCard bottle={bottle}/>
        </div>
    )
};

export default Page;