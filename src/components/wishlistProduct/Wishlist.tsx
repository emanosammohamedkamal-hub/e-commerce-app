"use client"
import { favRes } from '@/interfaces/favProduct/FavRes'
 import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio';
 import {  Loader2, Plus, Trash2 } from 'lucide-react';
import { apiservise } from '@/apiProducts/productApis';

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"
 import Link from 'next/link';
import { toast } from 'sonner';
import EmptyComponent from '../emptyComponent/Empty';
import { idData } from '@/context/id';
import { Product } from './../../interfaces/ordersinterface/Product';
import { Broducts } from '@/interfaces/broductsInterface';
import AddButton from './../addCartButton/addButton';
import { useRouter } from 'next/navigation';

 export default function WishlistPfoducts( ) {
   const[favproduct,setfavproduct]=useState< Broducts[]>()
   const route=useRouter()
   const{id:token}=useContext(idData)
   const[click,setclick]=useState(false)
    
   async function GetFavProduct(token:string) {
    const FavProduct=await apiservise.getFavouriteProduct(token)
     setfavproduct(FavProduct.data)
    
   }
   
 useEffect(function(){
    if(token){
 
        GetFavProduct(token)
    
     }
 },[token])

 
 async function removeItem(productid:string){

     const removedProduct=await apiservise.reoveFavouriteProduct(productid,token)
     const newProduct= favproduct?.filter(function(e){return e._id!==productid})
     setfavproduct(newProduct)
       console.log(newProduct)
          if(removedProduct.status=="success"){
          toast.success(removedProduct.message,{
        style:{
           color:"white",
          backgroundColor:"green"
        },
        position:"top-center"
      })
    }


  }


        
  return<>
 <h2>WishList Products</h2>
   <section className="py-32">
      <div className="container">
        <h1 className="mb-8 text-3xl font-semibold">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {favproduct?.length!>0 ?favproduct?.map((item) => (
                 <div
      key={item._id}
      className="flex gap-4 rounded-lg border bg-card p-4"
    >
      <div className="w-24 shrink-0">
        <AspectRatio
          ratio={1}
          className="overflow-hidden rounded-md bg-muted"
        >
          <img
            src={item.imageCover}
            alt={item.imageCover}
            className="size-full object-cover"
          />
        </AspectRatio>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-medium">{item.title}</h3>
          {/* {item.product.slug && (
                        <p className="text-sm text-muted-foreground">
                          {item.product.category.name}
                        </p>
                      )} */}
        </div>

        <div className="flex items-center gap-2">
          {/* <Button
            onClick={function () { handelUpdatedCount(item.count - 1) }}
            variant="outline"
            size="icon"
            className="size-8"
            disabled={item.count == 1 || isEditing}
          >
            {isEditingDecrease ? <Loader2 /> : <Minus className="size-3" />}

          </Button> */}
           {/* <Button
            disabled={item.count == item.product.quantity || isEditing}

            onClick={function () { handelUpdatedCount(item.count + 1) }}

            variant="outline"
            size="icon"
            className="size-8"
          >
            {isEditingIncrease ? <Loader2 /> : <Plus className="size-3" />
            }
          </Button> */}
        </div>
      </div>

      {/* <div className="flex flex-col items-end justify-between">
        <div className="text-right">
          <p className="font-semibold">
            Total Price: {(cart.price * item.count)}
          </p>
          <p className="text-sm text-muted-foreground">
            {formatPrice(cart.price)} $
          </p>
        </div>
        {loading ? <Loader2 className=' animate-spin mx-auto size-4' /> : <Button

          onClick={getCartAfterDeleteProduct}
          variant="ghost"
          size="sm"
          className=" bg-red-600 rounded-xl text-muted-foreground  "
        >
          <Trash2 className=" mr-1 size-4 " />
          Remove
        </Button>}




        </div> */
        
        <div>
           <Button
        
                  onClick={function(){removeItem(item._id)}}
                  variant="ghost"
                  size="sm"
                  className=" bg-red-600 rounded-xl text-muted-foreground  "
                >
                  <Trash2 className=" mr-1 size-4 " />
                  Remove
                </Button>
                <button onClick={function(){    setclick(true)
}}> 
                  
              {click?"view in cart": <AddButton product={item}/>}                  
                  </button>
           </div>
        }

    </div>

               )):<EmptyComponent/>}
            </div>
          </div>

          {/* Order Summary */}
        
        </div>
      {/* <button className="mt-4 px-4 py-2 mb-2 rounded-2xl bg-rose-700 disabled:bg-red-300 " disabled={loading} onClick={function(){clearCart(token)}}> ClearAll</button> */}
       <h5><Link href={"/"}>Continue Shopping   <i className="fa-solid fa-arrow-right"></i></Link></h5>
      </div>
    </section>
 
  
 
 </>







}