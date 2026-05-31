"use client";
import { Loader2,ShoppingCart,Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Cart } from "@/interfaces/cartInterface/addCartInterface";
 import { apiservise } from "@/apiProducts/productApis";
import { cartProductCount } from "@/context/Cartcontext";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import EmptyComponent from "../emptyComponent/Empty";
import { idData } from "@/context/id";
import AddButton from "../addCartButton/addButton";
import { AspectRatio } from '@/components/ui/aspect-ratio';
 import loading from './../../app/(pages)/loading';
import CartItem from "./CartItem";
 
export default function CartComponent() {
 const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };
    const{id:token}=useContext(idData)
     const [cartitem, setcartitem] = useState<Cart>();
    async function getcart(token:string){

   const cart  = await apiservise.getUserProductCart(token)
     setcartitem(cart)
   }
   console.log(token)
 
 useEffect(function(){
    if(token){
 
        getcart(token)
    
     }
 },[token])

  console.log(cartitem)

      const [loading, setloading] = useState(false)
  const{setCartNumber}= useContext(cartProductCount)

    
  async function removeItem(productid: string) {
    const deleteCart = await apiservise.deleteFromCart(productid,token)
    setcartitem(deleteCart)
  }
  const route=useRouter()
  async function updatecountincrease(productId: string, Count: number) {
    const response = await apiservise.updateCart(productId, Count,token)
    setcartitem(response)
  }
  async function clearCart(token:string) {
    setloading(true)
    const Cart = await apiservise.clearcart(token)
    if (Cart?.message == "success") {
      toast.success("ok")
    }
    setcartitem(Cart)


    setloading(false)


  }
 function  checkout(cartid:string) {
   
    route.push(`/getuseraddress/${cartid}` )
    
  }

  useEffect(function(){
    setCartNumber(cartitem?.numOfCartItems??0)
  },[cartitem?.numOfCartItems])
  
    return<>
     <section className="py-32">
      <div className="container">
        <h1 className="mb-8 text-3xl font-semibold">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartitem?.data.products.length!>0 ?cartitem?.data.products.map((item) => (
                 <CartItem item={item} removeItem={removeItem}updatecountincrease={updatecountincrease}/>
              )):<EmptyComponent/>}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <ShoppingCart className="size-4" />
                    {cartitem?.data.products.length} {cartitem?.data.products.length === 1 ? "item" : "items"}
                  </span>
                </div>
                
               

                <Separator />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span> {cartitem?.data.totalCartPrice!}</span>
                </div>
              </div>

              <Button size="lg" className="mt-6 w-full bg-black text-white rounded-3xl" onClick={function(){checkout(cartitem?.cartId??"")}}> 
               
                Proceed to Checkout
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      <button className="mt-4 px-4 py-2 mb-2 rounded-2xl bg-rose-700 disabled:bg-red-300 " disabled={loading} onClick={function(){clearCart(token)}}> ClearAll</button>
       <h5><Link href={"/"}>Continue Shopping   <i className="fa-solid fa-arrow-right"></i></Link></h5>
      </div>
    </section>
     </>
};

