"use client"
import React, { useState } from 'react'
import { Broducts } from '@/interfaces/broductsInterface';
import { Button } from "@/components/ui/button"
import Star from '../star/star';
import AddButton from '../addCartButton/addButton';



export default function ProductcardDetails({ productDetai}:{ productDetai:Broducts}) {
  const[currentindex,setcurrentindex]=useState(0)
        let num = productDetai.ratingsAverage;


let integerPart = Math.floor(num); 
let array=Array(integerPart).fill(0)
 console.log( array)
 let decimalPart = Math.round((num - integerPart) * 10);
 let decimalArray = Array(Math.abs(integerPart-5)).fill(0);
      return <>
  <div className='grid md:grid-cols-4 py-10 gap-8 ml-[50px]'>
     <div className="md:col-span-1 border rounded-xl  border-gray-100 flex items-center justify-center p-2 cardDetailsShadow relative ">

      
  <img className="max-w-full max-h-full object-contain"src={productDetai.images[currentindex]} alt={productDetai.title}/>

  <div className='grid grid-cols-9 gap-3 absolute bottom-0 left-[50%] transform translate-[-50%]'>
    
 {productDetai.images.map((image, index) => (
  <img
    key={index}
    onClick={() => setcurrentindex(index)}
    className={`w-[250px] col-span-2  ${
      index === currentindex? "border-2 border-blue-500" : ""
    }`}
    src={image}
    alt={productDetai.title}
  />
))}
  </div>
 
     </div>
     
  
  <div className='md:col-span-3 px-3  border rounded-xl  border-gray-100  p-2 cardDetailsShadow'>

    <span className='flex gap-2 pb-4'>
        <h2 className='bg-green-97 rounded-2xl py-[6px]  px-[12px]'>{productDetai.category.name}</h2>
        <h3 className='bg-gray_96 rounded-2xl py-[6px]  px-[12px]'>{productDetai.brand.name}</h3>
    </span>
    <h2 className='pb-3'>{productDetai.title}</h2>
    <div className='flex pb-4 gap-3' >
       
       <Star product={productDetai}/>
     <h3  >{productDetai.ratingsAverage}({productDetai.ratingsQuantity}reviews)</h3>

    </div>

    <div className='grid gap-3 py-5'>
 <h4>{productDetai.price}EGP</h4>
         <p className='pb-5'>{productDetai.description}</p>
         <div className='mt-2'>
          <h4>Quantity</h4>
          <div className=' border rounded-xl justify-between  border-gray-100   flex px-2 w-[172px] cardDetailsShadow'>
            <button className='font-bold text-2xl'>-</button>
            <h4 className='font-bold text-2xl'>1</h4>
            <button className='font-bold text-2xl'>+</button>
          </div>
            
         </div>
                         <AddButton   product={ productDetai}  />    

         </div>
          
    </div>
    


      </div>
 
   
  </>
  
}
