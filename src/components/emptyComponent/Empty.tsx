import React from 'react'

import {
    Empty,
   EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconFolderCode } from "@tabler/icons-react"
import Link from 'next/link'
export default function EmptyComponent () {
  return<>
  <Empty className="flex justify-center items-center h-[500px]">
      <EmptyHeader  >
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle className='text-4xl font-extrabold'>No Product Yet</EmptyTitle>
        <EmptyDescription>
           Add Product  <h5><Link href={"/"}>Continue Shopping   <i className="fa-solid fa-arrow-right"></i></Link></h5>
        </EmptyDescription>
      </EmptyHeader>
       
    </Empty>
  
  
  
  </>  
}
