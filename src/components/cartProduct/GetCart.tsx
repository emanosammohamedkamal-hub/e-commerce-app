import { apiservise } from '@/apiProducts/productApis'
import React from 'react'

export default function GetCart() {

    async function getcart(id:string){

  const cart  = await apiservise.getUserProductCart(id)
  return cart
  }
          return <>

          
       </>
   
}
