 "use client"
import React, { useContext } from 'react'
import signinimg from"../../../public/freshCart.png"
import Image from 'next/image'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FieldDescription, FieldLabel } from '@/components/ui/field';
import { Field } from '@/components/ui/field';
import { useForm } from 'react-hook-form';
import { register } from 'module';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { redirect, useRouter} from 'next/navigation';
import { idData } from '@/context/id';
import Link from 'next/link';
import { Arrow } from 'radix-ui/internal';
import { FaArrowRight } from 'react-icons/fa';
  
export default function Signin() {
     
  const {id}=  useContext(idData)
  if(id){

      console.log(id)
  }
    const router = useRouter()
    const { handleSubmit, register } = useForm()
    async function signin(data: any) {
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })
        if (res?.ok == true) {

            router.push("/")
        }

     }

  return (
      <div className='grid grid-cols-12 container  gap-12 ' >

            <div className='col-span-7  bg-[#FFFFFF] shadow-[0px_4px_6px_-4px_#0000001A] mt-[196px] rounded-[16px]  '>
                <div>
                    <Image src={signinimg} alt="signin" />
                </div>
                <div className='grid gap-4'>
                    <p className=' text-3xl font-bold  font-[exo]'>
                        FreshCart - Your One-Stop Shop for Fresh  <span className=' block text-center w-full  '>Products</span>
                    </p>
                    <p className='text-[18px] font-[500px]  font-[exo]'>Join thousands of happy customers who trust FreshCart for their daily <span className='block text-center w-full'>grocery needs</span> </p>
                    <ul className='flex gap-8 mx-auto w-full  text-center justify-center'>
                        <li className='flex items-center gap-1 font-[500] font-[exo] text-[14px]'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.75C0 0.784766 0.784766 0 1.75 0H9.625C10.5902 0 11.375 0.784766 11.375 1.75V2.625H12.7613C13.2262 2.625 13.6719 2.8082 14 3.13633L15.2387 4.375C15.5668 4.70312 15.75 5.14883 15.75 5.61367V9.625C15.75 10.5902 14.9652 11.375 14 11.375H13.9098C13.6254 12.384 12.6957 13.125 11.5938 13.125C10.4918 13.125 9.56484 12.384 9.27773 11.375H6.47227C6.18789 12.384 5.2582 13.125 4.15625 13.125C3.0543 13.125 2.12734 12.384 1.84023 11.375H1.75C0.784766 11.375 0 10.5902 0 9.625V1.75ZM14 7V5.61367L12.7613 4.375H11.375V7H14ZM5.25 10.7188C5.25 10.4287 5.13477 10.1505 4.92965 9.94535C4.72453 9.74023 4.44633 9.625 4.15625 9.625C3.86617 9.625 3.58797 9.74023 3.38285 9.94535C3.17773 10.1505 3.0625 10.4287 3.0625 10.7188C3.0625 11.0088 3.17773 11.287 3.38285 11.4921C3.58797 11.6973 3.86617 11.8125 4.15625 11.8125C4.44633 11.8125 4.72453 11.6973 4.92965 11.4921C5.13477 11.287 5.25 11.0088 5.25 10.7188ZM11.5938 11.8125C11.8838 11.8125 12.162 11.6973 12.3671 11.4921C12.5723 11.287 12.6875 11.0088 12.6875 10.7188C12.6875 10.4287 12.5723 10.1505 12.3671 9.94535C12.162 9.74023 11.8838 9.625 11.5938 9.625C11.3037 9.625 11.0255 9.74023 10.8204 9.94535C10.6152 10.1505 10.5 10.4287 10.5 10.7188C10.5 11.0088 10.6152 11.287 10.8204 11.4921C11.0255 11.6973 11.3037 11.8125 11.5938 11.8125Z" fill="#16A34A" />
                            </svg>

                            Free Delivery
                        </li>
                        <li className='flex items-center gap-1 font-[500] font-[exo] text-[14px]'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.55978 0C6.68556 0 6.81134 0.0273438 6.92618 0.0792969L12.0777 2.26406C12.6793 2.51836 13.1277 3.11172 13.125 3.82812C13.1113 6.54063 11.9957 11.5035 7.28439 13.7594C6.82775 13.9781 6.29728 13.9781 5.84064 13.7594C1.12657 11.5035 0.0136843 6.54063 1.24373e-05 3.82812C-0.00272194 3.11172 0.445716 2.51836 1.04728 2.26406L6.19611 0.0792969C6.31095 0.0273438 6.434 0 6.55978 0ZM6.55978 1.82656V12.1652C10.3332 10.3387 11.3477 6.2918 11.3723 3.86914L6.55978 1.8293V1.82656Z" fill="#16A34A" />
                            </svg>

                            Secure Payment
                        </li>
                        <li className='flex items-center gap-1 font-[500] font-[exo] text-[14px]'>

                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM6.34375 3.28125V7C6.34375 7.21875 6.45312 7.42383 6.63633 7.54688L9.26133 9.29688C9.56211 9.49922 9.96953 9.41719 10.1719 9.11367C10.3742 8.81016 10.2922 8.40547 9.98867 8.20312L7.65625 6.65V3.28125C7.65625 2.91758 7.36367 2.625 7 2.625C6.63633 2.625 6.34375 2.91758 6.34375 3.28125Z" fill="#16A34A" />
                            </svg>

                            24/7 Support
                        </li>

                    </ul>

                </div>

            </div>

            <div className='col-span-5 bg-[#FFFFFF] mt-16 mb-3.5 rounded-2xl shadow-[0px_20px_25px_-5px_#0000001A] shadow-[0px_8px_10px_-6px_#0000001A]    '>

                <div className='text-center mb-8'>
                    <h3 className='mb-4'><span>Fresh</span>Cart</h3>
                    <h2 className='mb-2'>Welcome Back!</h2>
                    <p>Sign in to continue your fresh shopping experience</p>


                </div>
                <form className='w-[80%] mx-auto grid gap-6 ' onSubmit={handleSubmit(signin)}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <Input {...register("email")} id="email" type="email" placeholder="Enter your email" />

                    </div>
                    <div>
                        <label htmlFor='password'>Email</label>
                        <Input {...register("password")} id="password" type="password" placeholder="*****************" />

                    </div>
                    <button type='submit' className='bg-green-800 rounded-2xl text-white py-2'>Signin</button>

                <Link href={"/signup"} className='flex items-center px-2 gap-2.5 justify-center '> Create New Account <FaArrowRight/> </Link>
                </form>
             </div>

        </div>
   )
}
