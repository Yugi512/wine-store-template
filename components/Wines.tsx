"use client"

import React from "react";
import sampleWines from "@/DummyData";
import Image from "next/image";
import Link from "next/link";

// middle div like in figma but instead of background image we just use slate color and yankee colors
// we use flexbox to align the items in the center and then 

const Wines = () => {
  return (
    <div className="">
      <h1 className="text-align-center text-4xl ">Popular wines</h1>
      <div className="grid grid-cols-5 gap-2">
        {sampleWines.map((wine,index) => {
          return (
            <Link href={`/shop/${wine.title}`} key={index}>
              <div key={index} className="border" >
                  <Image src={wine.image} alt={wine.title}  width={200} height={200}/>
                  <h2>{wine.title}</h2>
                  <p>{wine.ml} ml</p>
                  <p>${wine.price}</p>
                  <p>{wine.rating}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Wines;