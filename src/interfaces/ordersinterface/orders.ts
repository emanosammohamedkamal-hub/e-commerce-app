import { CartItem } from "./CartItem";
import { User } from "./user";

export interface Order {
  _id: string;
  id: number;
  cartItems: CartItem[];
  createdAt: string;
  updatedAt: string;
  isDelivered: boolean;
  isPaid: boolean;
  paidAt: string;
  paymentMethodType: "card" | "cash";
  shippingPrice: number;
  taxPrice: number;
  totalOrderPrice: number;
  user: User;
  __v: number;
}