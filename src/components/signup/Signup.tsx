 "use client"
 import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { id } from 'zod/locales';
import { register } from 'module';
import { apiservise } from '@/apiProducts/productApis';
import { zodResolver } from '@hookform/resolvers/zod';
import { email, object } from 'zod';
import { z} from "zod";
import { useRouter } from 'next/navigation';
import { schema } from '@/siginSchema/schema';
import { Loader2 } from 'lucide-react';
 export default function Signup() {
    const router=useRouter()
    const[loading,setloading]=useState(false)
    const[error,seterrors]=useState("")

    const{handleSubmit,register,formState:{errors}}=useForm({

        resolver:zodResolver(schema)
    })
   async function SignUp(data:object){
    setloading(true)

        const user= await apiservise.Signup(data)
        console.log(user)
        setloading(false)
      if(user.message=="success"){
        router.push("/auth/signin")
     }else{
        seterrors(user.message)
     }
    
    }
  return<>
  
  
<div className='w-[50%] mx-auto'>

    <form className='grid gap-2 py-3.5'onSubmit={handleSubmit(SignUp)}>    




<label htmlFor='fName'>First Name</label>
<Input {...register("name")} type='text'  id="fName" required placeholder='Enter Your Name'/>
 {errors.name &&  <p className= ' text-white bg-red-500 rounded-2xl w-[50%] px-3'>{errors.name.message}!!</p>}
<label htmlFor='email'>Email</label>
<Input type='email' {...register("email")}required id="email"  placeholder='Enter Your Email'/>
 {errors.email &&  <p className= ' text-white bg-red-500 rounded-2xl w-[50%] px-3'>{errors.email.message}!!</p>}


<label htmlFor='password'>Password</label>
<Input type='password' {...register("password")} required id="password" placeholder='Enter your password'/>
 {errors.password &&  <p className= ' text-white bg-red-500 rounded-2xl w-[50%] px-3'>{errors.password.message}!!</p>}

 <label htmlFor='rePassword'>Conform Password</label>
        <Input  type='password'{...register("rePassword")} required id="repassword" placeholder='Confirm Password'/>

 {errors.rePassword &&  <p className= ' text-white bg-red-500 rounded-2xl w-[50%] px-3'>{errors.rePassword.message}!!</p>}

         <label htmlFor='phone'>Phone</label>
        <Input type='number' {...register("phone")}  required id="phone" placeholder='enter Your Phone'/>
         {errors.phone &&  <p className= ' text-white bg-red-500 rounded-2xl w-[50%] px-3'>{errors.phone.message}!!</p>}
        <button  className='bg-black text-white rounded-3xl w-[50%] mx-auto  py-2 px-3 ' type="submit">{loading?<Loader2/>:"SignUp"}</button>
                   {error &&  <p className= ' text-white bg-red-500 rounded-2xl text-center py-2 px-3'>{error}!!</p>}


    </form>

</div>
   
  
  
  
  
  
  </>  
}
