'use client'
import React, { useState } from 'react'

import Header from '../header/Header'
import { title } from 'process'

export default function Main() {
    interface  texts{
        title?:string,
        title2?:string,
        paragraph?:string

    }
    const [active,setactive]=useState(0)
    const text:texts[]=[
         {
            title:"Fresh Products Delivered",
            title2:'to Your Door',
            paragraph:"Get 20% off Your First Order"
         },
          {
            title:"Premium Quality",
            title2:'Guaranteed',
            paragraph:"Fresh from farm to your table"
         },

         {
            title:"Fast & Free Delivery",

            paragraph:'Same day delivery available'
         }
    ]
    function pagenation(){

     }
  return <>
<div className="bg-[url('/home-slider.png')] bg-cover bg-center h-[400px] object-cover bg-no-repeat w-full relative ">
   <div className='layer bg-[rgba(0,255,0,0.5)]  text-white  z-1 absolute  inset-0 flex items-center '>
    <div  className=' px-[86px] grid gap-4'>
            <h2 className='font-[700]  text-[30px] text-base/[36px]  font-[Exo]'>{text[active].title} <br/>{text[active].title2}</h2>
            <p className='font-[500]  text-[16px] text-base/[24px]  text-[#FFFFFF]'>{text[active].paragraph}</p>
            <div className='flex gap-2'>
                <button className=' border-[#FFFFFF80] border-[2px] bg-[#FFFFFF] rounded-[8px] text-[#00C950] px-6 py-2 '>Shop Now </button>
                                <button className=' border-[#FFFFFF80] border-[2px]   rounded-[8px]  px-6 py-2 '>Shop Now </button>

            </div>

    </div>
    <div className=' absolute bottom-1 left-[50%] flex gap-2'>
   {text.map((_, index) => (
    <div
      key={index}
      onClick={() => setactive(index)}
      className={`w-[15px] h-[15px] cursor-pointer ${
        active === index ? "rounded-xl bg-emerald-600" : "rounded-full bg-white"
      }`}
    ></div>
  ))}
 

    </div>
   </div>
   </div>
  </>
  
}


