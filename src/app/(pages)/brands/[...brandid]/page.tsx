import { apiservise } from '@/apiProducts/productApis'
import EmptyComponent from '@/components/emptyComponent/Empty'
import ProductCard from '@/components/products/productCard'
import React from 'react'
 
export default async function BrandProduct({params}:{params:Promise<{brandid:string}>}) {
    const id=await params.then(({brandid})=>brandid)
    
    const products=await apiservise.getproducts()
    const specificProduct=products.filter(function(e){return e.brand._id==id})
    console.log(specificProduct)
    console.log(products)
  return<>
 <div className='grid grid-cols-12  mt-7 mx-auto gap-3'>

  {specificProduct.length>0?specificProduct.map(function(product){return<div className='sm:col-span-12 md:col-span-3'>
         <ProductCard product={product}/> 

     </div>
    }):<div className=' w-[480px] md:w-[700px] lg:w-[1520px]'><EmptyComponent/></div>}
    </div> 
  </> 
    
}
