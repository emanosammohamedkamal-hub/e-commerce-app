"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode, useContext, useState } from 'react'
 import { any } from 'zod';
import CartcontextProductProvider from '@/context/Cartcontext';
import Idcontext, { idData } from '@/context/id';
 
export default function ProviderWrapper(  { children }: { children: ReactNode }) {
 
    
  return<>
  <SessionProvider >
       <Idcontext>        
       <CartcontextProductProvider>

        {children}
       </CartcontextProductProvider>

</Idcontext>

  </SessionProvider>
  
  </> 
}
