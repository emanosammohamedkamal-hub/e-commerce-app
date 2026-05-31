import { Categories } from "./categoriesInterface";
import Brands from './../app/(pages)/brands/page';
import { Brand } from "./brandInterfase";
import { subcategory } from "./Subcategory";

export interface Broducts{
 
 _id: string;
  id: string; 
  title: string;
  description: string;
  slug: string;
  price: number;
  quantity: number;
  sold: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  imageCover: string;
  images: string[];
  brand: Brand;
  category: Categories;
  subcategory: subcategory[];
  createdAt: string;  
  updatedAt: string;












}