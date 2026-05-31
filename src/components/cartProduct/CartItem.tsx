"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Loader2, Minus, Plus, Trash2 } from 'lucide-react'
import { cartProducts } from '@/interfaces/cartInterface/cartProducts'
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { apiservise } from '@/apiProducts/productApis'
import {                            } from '@/interfaces/cartInterface/addCartInterface'
import { idData } from '@/context/id'

export default function CartItem({item, removeItem, updatecountincrease }: { item: cartProducts, removeItem: any, updatecountincrease: (productId: string, Count: number) => Promise<void> }) {
  const [cart, setcart] = useState(item)
  const [loading, setloading] = useState(false)
  const [isEditing, SetisEditing] = useState(false)
  const [isEditingIncrease, SetisEditingIncrease] = useState(false)
  const [isEditingDecrease, SetisEditingDecrease] = useState(false)
  const{setid}=useContext(idData)
  
  
  async function getCartAfterDeleteProduct() {
    setloading(true)
    await removeItem(item.product._id)
    setloading(false)
  }
  async function handelUpdatedCount(count: number) {
    if (count > item.count) {
      SetisEditingIncrease(true)
    } else {
      SetisEditingDecrease(true)
    }
    SetisEditing(true)

    await updatecountincrease(item.product._id, count)
    SetisEditing(false)
    SetisEditingDecrease(false)
    SetisEditingIncrease(false)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };
  return <>

    <div
      key={cart.product._id}
      className="flex gap-4 rounded-lg border bg-card p-4"
    >
      <div className="w-24 shrink-0">
        <AspectRatio
          ratio={1}
          className="overflow-hidden rounded-md bg-muted"
        >
          <img
            src={cart?.product.imageCover}
            alt={cart?.product.imageCover}
            className="size-full object-cover"
          />
        </AspectRatio>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-medium">{cart.product.title}</h3>
          {/* {item.product.slug && (
                        <p className="text-sm text-muted-foreground">
                          {item.product.category.name}
                        </p>
                      )} */}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={function () { handelUpdatedCount(item.count - 1) }}
            variant="outline"
            size="icon"
            className="size-8"
            disabled={item.count == 1 || isEditing}
          >
            {isEditingDecrease ? <Loader2 /> : <Minus className="size-3" />}

          </Button>
          <span className="w-8 text-center">{item.count}</span>
          <Button
            disabled={item.count == item.product.quantity || isEditing}

            onClick={function () { handelUpdatedCount(item.count + 1) }}

            variant="outline"
            size="icon"
            className="size-8"
          >
            {isEditingIncrease ? <Loader2 /> : <Plus className="size-3" />
            }
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <div className="text-right">
          <p className="font-semibold">
            Total Price: {(cart.price * item.count)}
          </p>
          <p className="text-sm text-muted-foreground">
            {formatPrice(cart.price)} $
          </p>
        </div>
        {loading ? <Loader2 className=' animate-spin mx-auto size-4' /> : <Button

          onClick={getCartAfterDeleteProduct}
          variant="ghost"
          size="sm"
          className=" bg-red-600 rounded-xl text-muted-foreground  "
        >
          <Trash2 className=" mr-1 size-4 " />
          Remove
        </Button>}




      </div>

    </div>

     
  </>
}
