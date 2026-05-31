import { apiservise } from '@/apiProducts/productApis'
import EmptyComponent from '@/components/emptyComponent/Empty'
import ProductCard from '@/components/products/productCard'
import React from 'react'
 
export default async function subcategoryProduct({params}:{params:Promise<{subCategoriesId:string}>}){
  const id=await params.then( ({subCategoriesId})=>subCategoriesId[0] )
   const products=await apiservise.getproducts()
    

      const result = products.filter(product =>
  product.subcategory?.some(sub => sub._id == id)
)

     return<>
    <div className='grid grid-cols-12  mt-7 mx-auto gap-3'>
    
      {result.length>0?result.map(function(product){return<div className='sm:col-span-12 md:col-span-3'>
             <ProductCard product={product}/> 
    
         </div>
        }):<div className=' w-[480px] md:w-[700px] lg:w-[1520px]'><EmptyComponent/></div>}
        </div> 

  
  
  </>  
}
