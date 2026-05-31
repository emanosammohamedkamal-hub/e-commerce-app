"use client"
import { apiservise } from "@/apiProducts/productApis";
import { Address } from "@/interfaces/address";
import { createContext, useState , Dispatch, ReactNode} from "react";
import React from 'react'
import { string } from "zod";
  

export const LocationData= createContext<{ Location: Object; setLocation: Dispatch<React.SetStateAction<object>> }> ({
  Location:{ },
  setLocation:()=>{}

}) 

 
  
 export default function Locationcontext({children}:{children:ReactNode}){
   const[Location,setLocation]=useState<object>({})
   return<>
   
   <LocationData.Provider value={{Location,setLocation}}>
       {children}

   </LocationData.Provider>
   
   </> 
 }
 
