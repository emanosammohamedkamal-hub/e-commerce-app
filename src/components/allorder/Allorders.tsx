"use client"
import { apiservise } from "@/apiProducts/productApis"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { idData } from "@/context/id"

 import React, { useContext, useEffect, useState } from 'react'
import { Order } from './../../interfaces/ordersinterface/orders';
 import { jwtDecode } from "jwt-decode"
import { useSession } from "next-auth/react"
import EmptyComponent from "../emptyComponent/Empty"
 
export default  function AllORders() {
  const[allorders,setallorders]=useState<Order[]> ([])
 

  const {id:token}=useContext(idData)
 const[userid,setuserid]=useState("")

   async function Getallorders(id:string){
     const allorder= await apiservise.getallOrder(id)
     console.log(allorder)
  setallorders(allorder)
 
   }
useEffect(() => {
  if (token) {
    const decoded: any = jwtDecode(token);

    const id = decoded.id 

    setuserid(id);
  }
}, [token]);
  
useEffect(() => {
  if ( userid) {
    Getallorders( userid);
  }
}, [ userid]);

console.log(allorders)
        return<> 
     <Accordion type="single" collapsible className="sm:w-full md:w-[70%] md: mx-auto  ">
  {allorders.length>0?allorders.map((order) => (
    <AccordionItem key={order._id} value={order._id}>
      
       <AccordionTrigger>
        <div className="flex items-center gap-4">
          <img
            src={order.cartItems[0].product.imageCover}
            className="w-[40px] rounded"
          />
          <h3 className="font-medium">
            {order.cartItems[0].product.title}
          </h3>
        </div>
      </AccordionTrigger>

       <AccordionContent className="overflow-auto">
        <div className="space-y-2 mt-2">
          {order.cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-50 p-2 rounded"
            >
              <img
                src={item.product.imageCover}
                className="w-[40px] rounded"
              />
              <p>{item.product.title}</p>
            </div>
          ))}
        </div>
      </AccordionContent>

    </AccordionItem>
  )):<EmptyComponent/>}
</Accordion>


   
   
   </>

}
