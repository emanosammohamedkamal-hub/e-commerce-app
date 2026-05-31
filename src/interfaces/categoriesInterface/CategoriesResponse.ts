import { Category } from './Category';
import { Metadata } from './Metadata';
export interface CategoriesResponse {
  results: number;
  metadata: Metadata;
  data: Category[];
}