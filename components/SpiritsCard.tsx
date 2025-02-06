import Image from "next/image"
import { LiquorBottle } from "@/types"
import React from "react"

const SpiritCard = ({bottle} : {bottle: LiquorBottle}) => {
    const {title,description,price,rating,abv,region,country,ml,type,spirits,brand,image} = bottle
        
        return (
            <div>
                <div className="border">
                    <Image 
                    src={image}
                    width={500}
                    height={500} alt={"imagezz"}
                />
                </div>
                <br/>
                <h1>{title}</h1>
                <h2>{price}</h2>
                <br/>
                <div className="border">
                    <p>{ml}</p>
                    <p>{rating}</p>
                    <p>{description}</p>
                    <p>{abv}</p>
                </div>
                <br/>
                <div className="border">
                    <p>{region}</p>
                    <p>{country}</p>
                    <p>{type}</p>
                    <p>{spirits}</p>
                    <p>{brand}</p>
                </div>
                
            </div>
        )
}

export default SpiritCard