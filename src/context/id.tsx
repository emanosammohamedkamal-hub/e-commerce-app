"use client"
import { apiservise } from "@/apiProducts/productApis";
import { Address } from "@/interfaces/address";
import { createContext, useState , Dispatch, ReactNode, useEffect} from "react";
import React from 'react'
import { useSession } from 'next-auth/react';
   

export const idData= createContext<{ id:string; setid: Dispatch<React.SetStateAction<string>> }> ({
  id:"",
  setid:()=>{}

}) 

 
  
 export default function Idcontext({children}:{children:ReactNode}){
  const token= useSession()
   const[id,setid]=useState("")
    
  useEffect(function(){

     const userToken = token.data?.user.token

  console.log("TOKEN:", userToken)

    if(token.data?.user.token!=undefined){
       setid(token.data?.user.token)
         console.log(token.data?.user.token)

    }else{
       setid("")
    }
  },[token.data?.user.token])
       return<>
   
   { <idData.Provider value={{id,setid}}>
       {children}

   </idData.Provider>
    }
   </> 
 }
 
