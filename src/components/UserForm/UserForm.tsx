 "use client"
 import React, { useContext, useState } from 'react'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from "zod"
import { apiservise } from '@/apiProducts/productApis'
import { toast } from 'sonner'
 import { schema } from '@/validateschema/scheam'
import { inputattributes } from '@/helpers/inputfuncation'
import { Loader2 } from 'lucide-react'
import { LocationData } from '@/context/Locationcontext'
import { idData } from '@/context/id'
import { useParams } from 'next/navigation'
       
export default function UserForm() {
     const{id} =useParams()
     console.log(id)
     const{id:token}=useContext(idData)
 
        const[addingAddress,setaddingaddress]=useState(false)
  const{handleSubmit,register,formState:{errors}}=useForm({
    resolver:zodResolver(schema)
})
     async function addUserAddress(data:any) {
        
    setaddingaddress(true)
    const userAddress=await apiservise.addAddress(data,token)
    console.log(userAddress)
            setaddingaddress(false)
            const locationAddress=await apiservise.checkout(id,data,token)
         location.href=locationAddress.session.url
                 
        if(userAddress.status=="success"){
        return  toast.success( `${userAddress?.message}`,{
            style:{
                color:"green",
                fontSize:"20px"
            }
        })
     }
  
     }   
 
   return<>
  <form onSubmit={handleSubmit(addUserAddress)}>

     <div className='w-[50%] mx-auto  grid gap-2 py-32' >    
      <label htmlFor='name'>Address Name</label>
     <Input  {...register("name")}    {...inputattributes("name","text","Enter your Name")}  />
     {errors.name&& <p className="text-red-500">{errors.name?.message}</p>}

  <label htmlFor='details'>Details</label>
     <Input  {...register("details")}    {...inputattributes("details","text","Enter Details")}  />
     {errors.details&& <p className="text-red-500">{errors.details?.message}</p>}

    <label htmlFor='phone'>Phone</label>
     <Input  {...register("phone")}    {...inputattributes("phone","number","Enter your Phone")}  />
     {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}


    <label htmlFor='city'>City</label>
    <Input {...register("city")}    {   ...inputattributes("city","text","Enter your City")} />
     {errors.city && <p className="text-red-500">{errors.city.message}</p>}


    <Button disabled={addingAddress} className=' disabled:bg-gray-600   bg-black text-white rounded-[8px] py-3 px-5 w-fit mx-auto' type='submit'> {addingAddress&&<Loader2  className='mx-0.5 animate-spin'/>}Add Address </Button>
   </div>
   </form>
  </>  
}
