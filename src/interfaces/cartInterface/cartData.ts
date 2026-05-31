import { cartProducts } from "./cartProducts"

export interface cartData{
    cartOwner:string
    createdby:string,
    totalCartPrice:number,
    updatedAt:string,
    _v:number,
    _id:string
    products:cartProducts[]

}