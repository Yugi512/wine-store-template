"use client"

import React from "react";
import { dummySpirits } from "@/constants/dummySpirits";
import Image from "next/image";
import Link from "next/link";

const Spirits = () => {
    return (
        <div className="">
          <h1 className="text-align-center text-4xl ">Spirits</h1>
          <div className="grid grid-cols-5 gap-2 ">
            {dummySpirits.map((liquor,index) => {
              return (
                <Link href={`/spirits/${liquor.id}`} key={index}>
                  <div key={index} className="border" >
                      <Image src={liquor.image} alt={liquor.title}  width={200} height={200}/>
                      <h2>{liquor.title}</h2>
                      <p>{liquor.ml} ml</p>
                      <p>${liquor.price}</p>
                      <p>{liquor.rating}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
}

export default Spirits