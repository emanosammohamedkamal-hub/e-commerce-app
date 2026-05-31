 import { apiservise } from '@/apiProducts/productApis'
import React from 'react'
 import { Brand } from './../../../interfaces/brandInterfase';
import Main from '@/components/layout/mainSection/Main';
import ProductCard from '@/components/products/productCard';
import { jwtDecode } from 'jwt-decode';
  
 export default async function Product( ) {
   const products=await apiservise.getproducts()
    return <> 
   
     <div >
      <Main/>
      <h2><span>I </span> Featured <span>Products</span></h2>

      <div className='mt-[32px]  grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 '> 
        {
        products.map(function(product){return<div>
          <ProductCard product={product}/>
 
       </div>})
          }

      </div>
     </div>
 
   
    </>
  }