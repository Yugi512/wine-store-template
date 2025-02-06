import WineCard from "@/components/WineCard";
import sampleWines from "@/DummyData";
import React from "react"

const Page = async ({params} : {params: Promise<{ id: number }>}) => {
    const id = (await params).id
    const bottle = sampleWines[id-1];
    console.log(bottle)

    if (!bottle) {
        return <div>Wine not found</div>;
    }
    return (
        <div>
            <WineCard bottle={bottle}/>
        </div>
    )
};

export default Page;