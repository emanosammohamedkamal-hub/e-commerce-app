  import { apiservise } from '@/apiProducts/productApis'
 import Product from '../products/page'
 import { idData } from '@/context/id'
import { useContext } from 'react'
import CartComponent from '@/components/cartProduct/Cart'
  
export default  async function Cart () {
  

         return <>
  
<CartComponent/>
  </>

}
