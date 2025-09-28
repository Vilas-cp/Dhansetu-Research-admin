"use client";
import React from 'react'
import GreyCard1 from './servicescomp/GreyCard2'
import Servicescontent from '@/data/Services/servicesdata';




const Itservicessection = () => {
  return (
    <>
      <div className="pt-[40px]">
        
        <div className="w-full card-container md:w-[80%] mx-auto h-auto py-5 flex justify-evenly flex-row items-center flex-wrap">
          {Servicescontent.map((greyCardProps, index) => (
            <GreyCard1 key={index} {...greyCardProps} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Itservicessection