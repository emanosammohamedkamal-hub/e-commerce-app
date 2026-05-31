 'yse client'
 import { apiservise } from '@/apiProducts/productApis'
import { Broducts } from '@/interfaces/broductsInterface'
import React, { useContext, useState } from 'react'
import { SpinnerDemo } from '../loading/load'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { cartProductCount } from '@/context/Cartcontext'
import { idData } from '@/context/id'


type product={
    product:Broducts
}
export default function AddButton({product}:product) {
    const{id:token}=useContext(idData)
     const{setCartNumber,cartNumber}= useContext(cartProductCount)
     console.log(token)
    const[loading,setloading]= useState(false)

    async function addproductCart(){
         setloading(true)
          const data=await apiservise.addProductcart(product._id,token)
         setCartNumber(data.numOfCartItems)
         console.log(cartNumber)
          setloading(false)
            if (data.status === "success"){
                     return toast.success(data.message, {
                        style:{
                            color:"green"
                        }
            
        })
                     
                    
                    }

    }
  return<>
   
  <button disabled={loading} onClick={addproductCart} className=' disabled:bg-blue-200 bg-blue-600 rounded-[8px] py-2 px-6 text-white w-fit '>   {loading==true?<SpinnerDemo/>:"Add to Cart"}</button>
  
  </>  
 }