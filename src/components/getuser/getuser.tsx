"use client"
 import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { inputattributes } from '@/helpers/inputfuncation'
import { toast } from 'sonner'
import { apiservise } from '@/apiProducts/productApis'
import { schema } from '@/validateschema/scheam'
import {   Loader2, Route } from 'lucide-react'
import { AddressResponse } from './../../interfaces/adressInterface/addressResponse';
import { any } from 'zod'
import { Address } from './../../interfaces/address';
 import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import Link from 'next/link'
import { navigate } from 'next/dist/client/components/segment-cache/navigation'
import { useParams, useRouter } from 'next/navigation'
import { LocationData } from '@/context/Locationcontext'
import { idData } from '@/context/id'
import { JwtDecodeOptions } from './../../../node_modules/jwt-decode/build/cjs/index.d';
  export default function Getuser () {

   const{id:token}= useContext(idData)
 const[addingAddress,setaddingaddress]=useState(false)
  const[checked,setchecked]=useState(false)
 
const[data,setdata]=useState<Address[]>([])
 const [selectedAddressId, setSelectedAddress] = useState<string>("")
 const[userAddress,setuserAddress]=useState<{}>({ })
      async function getLoggedUserAddress( ) {
    setaddingaddress(true)
    const {data}=await apiservise.getLogedUserAddress(token)
    setdata(data)
         }   
        const {id}=useParams()
  
    useEffect(function(){
      getLoggedUserAddress()


  },[]) 

   async  function handelAddress(e:Address){
    localStorage.setItem("userId",e._id)
           setSelectedAddress(e._id)
                setuserAddress(e)
                
          const data=await apiservise.checkout(id,e,token)
 
          if(data.status=="success"){
             
                  location.href=data.session.url
               

                  

        } 
 
      } 




     return <>
              <h2 className='text-center font-bold text-2xl font-serif mt-3'>Choose Address</h2>
     {data?data.map(function(e){return<div   >

     <Card  onClick={function(){ handelAddress(e) 
             setchecked(true)
 

     }} className={` ${selectedAddressId==e._id?"border-blue-500 bg-blue-50" :"border-gray-200"}    w-[50%] mx-auto grid gap-7 mb-7 px-3 mt-5 relative`}>

       <input className='absolute right-4 top-3'
       disabled={checked}
       checked={selectedAddressId==e._id  }
        onChange={function(){setSelectedAddress(e._id)
            

 
       }}
      type="radio"
     />     
        <h2> <span className='text-xl'> Address Name:</span>{e.name}</h2>  
        <h2> <span className='text-xl'> Details:</span>  {e.details}</h2>
        <h2> <span className='text-xl'> Phone:</span> {e.phone}</h2>  
        <h2> <span className='text-xl'  >City</span> {e._id}</h2> 
       
           
     </Card>  
 



      
     </div> 

      }):""
      
     
     } 

    <Link href={"/userAddress/"+id} className='w-full flex justify-center'>
    <Button className='bg-gray-700 text-white rounded-full px-2.5 py-2 mb-5'>Add New Address</Button>  

    
    
    </Link>
 


   </>
}