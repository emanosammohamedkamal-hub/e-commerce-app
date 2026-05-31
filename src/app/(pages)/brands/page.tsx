import { apiservise } from '@/apiProducts/productApis'
import Link from 'next/link'
import React from 'react'
import { Broducts } from './../../../interfaces/broductsInterface';
  
export default async function Brands() {
   const brand=await apiservise.getAllBrands()
   console.log(brand.data[0])
 
    return<>
  
    <div className='grid grid-cols-11'>
       
     {brand.data.map(function(data){return<div className='bg-[#FFFFFF] hover:shadow-2xl pb-8  transition-shadow duration-500  rounded-2xl col-span-2 gap-3 m-6 shadow-2xl shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] overflow-hidden'>
      
  
 <Link href={"/brands/"+data._id}>
       <div className='mx-4 rounded-2xl group    overflow-hidden  '>
          <img src={data.image} className='h-[200px]  mx-auto  bt-2 object-contain group-hover:scale-125  transition-all duration-500'/>
 
      </div>      
 </Link>
                <h3 className='text-center  group-hover:text-green-600  font-extrabold mt-5'>{data.name}</h3>
                <Link href={" /"} className='group-hover:block  hidden text-center  group-hover:text-green-600'><h5 className='text-[13px]'>View SubCategories <i className="fa-solid fa-right-long"></i></h5></Link>

  
     </div>})}

 

     </div>
  
  </> 
}
