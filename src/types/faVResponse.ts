export interface WishlistResponse {
  status: "success" | "fail";
  message: string;
  data: string[]; // array of product IDs
}