import { apiservise } from "@/apiProducts/productApis";
import { Session } from "inspector/promises";
import NextAuth from "next-auth";
 import  CredentialsProvider  from 'next-auth/providers/credentials';
 import async from './../../../page';
import EmailProvider from "next-auth/providers/email"
import { useContext } from "react";
import { idData } from "@/context/id";
import { date } from "zod";


const handler=NextAuth({
  providers: [
    CredentialsProvider({

         name: 'Credentials',
     
    credentials: {
      email: { label: "email", type: "email", placeholder: "enter your email" },
      password: { label: "Password", type: "password",  placeholder:"**************"}
    },
    async authorize(credentials) {
         const data=await apiservise.signin(credentials?.email??"",credentials?.password??"")
        console.log(data)
        if(data.message=="success"){
                   
           const user={
    id:data.user.email,
    name:data.user.name,
    email:data.user.email,
    role:data.user.role,
    token:data.token
    
            }

                 return user

        }else{
       return null

        }
  
      }
    
    }),
     
  ],

  pages:{
    signIn:"/auth/signin"
  },
  callbacks: {
    async session({session,token}){
    session.user.token=token.token as string;
    session.user.role=token.role as string

    return session
  },
jwt({user,token}){
  if(user){



    token.role=user?.role;
    token.token=user?.token
  }



    return token
  }


},
  
 secret:process.env.AUTH_SECRET  
})    
 
 export { handler as GET, handler as POST }

