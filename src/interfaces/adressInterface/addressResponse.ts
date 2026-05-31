 import { Address } from './../address';

 export interface AddressResponse {
  results: number;
  status: "success" | "error";
  data:Address[];
}