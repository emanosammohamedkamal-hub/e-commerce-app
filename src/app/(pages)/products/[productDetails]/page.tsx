import { apiservise } from "@/apiProducts/productApis"
import ProductcardDetails from "@/components/products/productcardDetails"
  import { Broducts } from "@/interfaces/broductsInterface"

 export default async  function ProductDetails({params}:{params:Promise<{productDetails:string}>}) {
 
    const id=await params.then(({productDetails})=> productDetails)

    const productDetails= await apiservise.getproductsDetails(id)
     return (
    <div>
      <ProductcardDetails  productDetai={productDetails} />
    </div>
  )
}
