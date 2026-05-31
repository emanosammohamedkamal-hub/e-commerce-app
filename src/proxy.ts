import NextAuth from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
   
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
 
    const tokenUser=await getToken({req:request})
   if(tokenUser?.token){
      NextResponse.next()
 
 } else{   
  return NextResponse.redirect(new URL('/auth/signin', request.url))
}
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 export const config = {
  matcher: ['/cart',"/allorders","/whishlist"],
}