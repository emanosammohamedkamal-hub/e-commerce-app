"use client"

import { apiservise } from "@/apiProducts/productApis"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import { idData } from "./id";
import { cartData } from './../interfaces/cartInterface/cartData';

export const cartProductCount = createContext<{ cartNumber: number; setCartNumber: Dispatch<SetStateAction<number>>; }>({
  cartNumber:0,
  setCartNumber:()=>{}
})

  
export default function CartcontextProductProvider({children}:{children:ReactNode}) {
      const{id:token}=useContext(idData)
  
    const [cartNumber, setCartNumber] = useState(0);

 useEffect( function(){
  async function getnumCartProduct() {
    
    const cartProductNumber= await apiservise.getUserProductCart(token)
     setCartNumber(cartProductNumber.numOfCartItems)
   } 

  getnumCartProduct()
},[cartNumber])


   return<cartProductCount.Provider value={{cartNumber,setCartNumber}}>
 {children}
  </cartProductCount.Provider>
}
