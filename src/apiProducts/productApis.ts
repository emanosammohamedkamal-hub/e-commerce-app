import { Broducts } from "@/interfaces/broductsInterface"
import { date } from './../../node_modules/shadcn/node_modules/zod/v4/mini/schemas';
import { json } from "stream/consumers";
 import { cartData } from "@/interfaces/cartInterface/cartData";
import { Cart } from "@/interfaces/cartInterface/addCartInterface";
import { AddressResponse } from "@/interfaces/adressInterface/addressResponse";
import { jwtDecode } from "jwt-decode";
 import { Order } from "@/interfaces/ordersinterface/orders";
import { userResponse } from "@/types/useResponse";
import { WishlistResponse } from "@/types/faVResponse";
import { favRes } from "@/interfaces/favProduct/FavRes";
import { Categories } from "@/interfaces/categoriesInterface";
import { CategoriesResponse } from "@/interfaces/categoriesInterface/CategoriesResponse";
import { BrandCard } from "@/interfaces/brands/data";
import { brandResponse } from "@/interfaces/brands/brandresponse";
import { useSession } from "next-auth/react";

   class Apis{
    
    #Base_Url=process.env.NEXT_PUBLIC_api_products_url;
   
       async getproducts():Promise<Broducts[]>{

        const res= await fetch(`${this.#Base_Url}v1/products`,{
            method:"get",
         })
        const {data}=await res.json()
        return data
    }

 async getproductsDetails(id:string):Promise<Broducts>{

        const res= await fetch(`${this.#Base_Url}v1/products/${id}`,{
            method:"get",
         })
        const {data}=await res.json()
        return data
    }

   
 async  addProductcart(productId:string, token :string):Promise< Cart> {

        const res= await fetch(`${this.#Base_Url}v1/cart`,{
            method:"POST",
              body:JSON.stringify({
                             productId:productId

             }),
            headers:{
                "Content-Type":"application/json",
                                 token 
             },
           
        })
        const data=await res.json()
        return data
      }

  async getUserProductCart(token:string):Promise<Cart>{
        const res=await fetch(`${this.#Base_Url}v2/cart`,{
            method:"get",
            headers:{
            "Content-Type":"application/json",
             token
            }
        })
        const data=await res.json()
                console.log(data)

        return data
      }


    async deleteFromCart(id:string,token:string):Promise<Cart>{
        const res= await fetch(`${this.#Base_Url}v2/cart/${id}`,{
            method:"DELETE",
             headers:{
            "Content-Type":"application/json",
             token

            }
         })
        const data=await res.json()
        console.log(data)

        return data
     }
       
      async clearcart (token:string):Promise<Cart>{

        const res= await fetch(`${this.#Base_Url}v2/cart`,{
            method:"DELETE",
            headers:{
            "Content-Type":"application/json",
             token
            }
        })
        const data=await res.json() 
         return data
    }

    async updateCart(productId:string,count:number,token:string):Promise<Cart>{
        const res=await fetch(`${this.#Base_Url}v2/cart/${productId}`,{
            method:"PUT",
            headers:{
            "Content-Type":"application/json",
             token 

            },
            body:JSON.stringify({
                count:count
            })
            
        })
        const newCount= await res.json()
        return newCount
    }

    async addAddress( data:object,token:string){
        const req=await fetch(`${this.#Base_Url}v1/addresses`,{
            method:"post",
            headers:{
            "Content-Type":"application/json",
             token

            },
            body:JSON.stringify(
                data
            )
        })
        const res=await req.json()
        return res
    }

    async getLogedUserAddress(token:string):Promise<AddressResponse>{
        const res=await fetch (`${this.#Base_Url}v1/addresses`,{
              headers:{
                 "Content-Type":"application/json",
                 token

            },
        })
        const req=await res.json()
        return req
    }

    
    async checkout (id:any,data:object,token:string){
        const res=await fetch(`${this.#Base_Url}v1/orders/checkout-session/${id}/?url=http://localhost:3000`,{
            method:"post",
             headers:{
            "Content-Type":"application/json",
             token 

            },
            body:JSON.stringify({

         "shippingAddress":data

            }
             )
        })
        const req=await res.json()
        return req
    }


    async  getallOrder(id:string):Promise<Order[]>{
        const res= await fetch(`${this.#Base_Url}v1/orders/user/${id}`,{
            
        })
        const req=await res.json()
        console.log(req)
        return req
    }


    async signin(email:string,password:string):Promise< userResponse>{
        const req=await fetch(`${this.#Base_Url}v1/auth/signin`,{
            method:"post",
             headers:{
            "Content-Type":"application/json"},
            body:JSON.stringify({
                email,
                password
            }),
            
         })
        const res=await req.json()
        return res
    }


    async addFavourite(productId:string,token:string):Promise<WishlistResponse>{
        const req=await fetch(`${this.#Base_Url}v1/wishlist`,{
            method:"Post",
               headers:{
            "Content-Type":"application/json",
             token,
            },
            body:JSON.stringify({
                productId
            })
            

        })
        const res=await req.json()
        return res
    }



async getFavouriteProduct(token:string):Promise<favRes>{
        const req=await fetch(`${this.#Base_Url}v1/wishlist`,{
            method:"get",
               headers:{
            "Content-Type":"application/json",
             token },
            
            

        })
        const res=await req.json()
        return res
    }

    
async reoveFavouriteProduct(id:string,token:string):Promise<WishlistResponse>{
        const req=await fetch(`${this.#Base_Url}v1/wishlist/${id}`,{
            method:"DELETE",
               headers:{
            "Content-Type":"application/json",
             token 
            },
            
            

        })
        const res=await req.json()
        return res
    }

async getAllCategories():Promise<CategoriesResponse>{
       const req=await fetch(`${this.#Base_Url}v1/categories`)
       const res=await req.json()
       return res;
    }
    
async getAllSubCategories(id:string):Promise<CategoriesResponse>{
       const req=await fetch(`${this.#Base_Url}v1/categories/${id}/subcategories`)
       const res=await req.json()
       return res;
    }
    
async getAllBrands():Promise<brandResponse>{
       const req=await fetch(`${this.#Base_Url}v1//brands`)
       const res=await req.json()
       return res;
    }


    async Signup(data:object){
        const req=await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
            method:"post",
           body:JSON.stringify(
            data
           ),
           headers:{
              "Content-Type": "application/json",

           }
        })
        const res=await req.json()
        return res
    }
}

export const apiservise=new Apis()