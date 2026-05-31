'use client'

import { Broducts } from '@/interfaces/broductsInterface'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import Star from '../star/star'
import AddButton from '../addCartButton/addButton'
 import { apiservise } from '@/apiProducts/productApis'
 import { toast } from 'sonner'
import { idData } from '@/context/id'
import { cartProductCount } from '@/context/Cartcontext'
   

type product = {
  product: Broducts
}


export default function ProductCard({ product }: product) {
  const[Iconclass,setIconclass]=useState("fa-regular")
    const{setCartNumber}= useContext(cartProductCount)
  console.log(product)
  const[clicked,setclicked]=useState(false)
const[color,setcolor]=useState("bg-white")
 const[dataIds,setdataIds]=useState([])
      const{id:token}=useContext(idData)
 
async   function addproductToFavPage(){
setclicked(true)
    const products=await apiservise.addFavourite(product._id,token)
      if(products.status=="success"){
      toast.success(products.message,{
        style:{
           color:"white",
          backgroundColor:"green"
        },
        position:"top-center"
      })
    }
     console.log(products)
   }
 
     
    async function removeItem(productid:string){

      if(product._id==productid){
        const removedProduct=await apiservise.reoveFavouriteProduct(productid,token)
         
      }  
    
           
   
   
            }
  return <>

      <div className='border-1 border-gray_91 rounded-[8px] overflow-hidden mx-4  hover:translate-y-[-10px] hover:shadow-xl transition duration-400 color-white-solid'>


        <div className='relative  '  >
          <img src={product.imageCover} className='w-[90%] object-contain h-60' />

          <div className='grid gap-2 absolute top-3 right-3  '>

            <div className='w-8 h-8 rounded-full flex items-center justify-center bg-white-solid shadow'>
              <button onClick={addproductToFavPage} disabled={clicked}>
              <i className={`${Iconclass} ${color} fa-heart `}onClick={function(){setIconclass("fa-solid")

              removeItem(product._id)
                setcolor("text-red-600")}}></i>

              </button>
            </div>

            <div className='w-8 h-8 rounded-full flex items-center justify-center bg-white-solid shadow'>
    <Link href={`/products/${product._id}`} >
              <img src="/Vector (1).png" />

     </Link>
            </div>
          </div>
 



        </div>
      </div>

      <div className='p-4 grid gap-2  h-[150px] '>

        <h3>{product.category.name}</h3>

        <h3 className='overflow-auto'>{product.title}</h3>

        <h4 className='flex gap-1'> <Star product={product} />
          {product.ratingsAverage} ({product.ratingsQuantity})</h4>

        <div>
          <h5>{product.price} EGP</h5>
        </div>

      </div>

    <div className='p-4 grid gap-1'>
      <AddButton product={product} />


    </div>





  </>
}
