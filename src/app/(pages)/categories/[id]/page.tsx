import { apiservise } from '@/apiProducts/productApis'
import { Folder, FolderArchive, FolderCheck, FolderClock, FolderClosed, FolderCode, FolderCog, FolderDownIcon, FolderGit2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
  
export default async function page({params}:{params:Promise<{id:string}>}) {

const id=await params.then( ({id})=>id )
const res=await apiservise.getAllSubCategories(id)
console.log(res.data[2]._id)
  return<>
  
    <div className='grid grid-cols-11'>
       
     {res.data.map(function(data){return<div className='bg-[#FFFFFF] hover:shadow-2xl pb-8  transition-shadow duration-500  rounded-2xl col-span-2 gap-3 m-6 shadow-2xl shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] overflow-hidden'>
      <Folder className='text-green-800 text-center mx-auto mt-5'/>
        
 <Link href={`/categories/${id}/${data._id}`} className='group'>
                 <h3 className='text-center  group-hover:text-green-600  font-extrabold mt-5'>{data.name}</h3>
  </Link>

  
     </div>})}

 

     </div>
  
  </>  
}
