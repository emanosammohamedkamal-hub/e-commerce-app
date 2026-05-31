import { Brand } from "../brandInterfase";
import { Categories } from "../categoriesInterface";
import { subcategory } from "../Subcategory";

export interface cartProducts{
    count:number,
    price:number,
    product:ProductInfo,
    _id:string
}
export interface ProductInfo {
  _id: string;
  title: string;
  slug: string;
  quantity: number;
  subcategory: subcategory[];
  imageCover?: string;
  price?: number;
  category:Categories
brand:Brand,
ratingsAverage:number

}