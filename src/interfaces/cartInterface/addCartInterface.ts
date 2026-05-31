import { cartData } from "./cartData"

  type status="success"|"error"
 
export interface Cart{
status:status,
message:string,
 numOfCartItems:number,
cartId:string,
data:cartData 
    
}