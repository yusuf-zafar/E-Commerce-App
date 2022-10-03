import { useParams } from "react-router-dom"
import { useApi } from "../hooks/useApi";
 
export default function OrderDetail() {
   const { id } = useParams();
   const { data: order, isLoading, error } = useApi(`http://localhost:3000/orders/${id}`);
 
   return (
       <div style={{ 'border': '1px solid #e4e4e4', 'borderRadius': '4px', 'padding': '10px' }}>
           {order && (
               <>
                   <h3>Order Id: {order.id}</h3>
                   <h4>Products</h4>
                   {order.products.map(product => (
                       <div key={product.id}>
                           <h5>{product.name}</h5>
                           <p>Quantity: {product.quantity}</p>
                           <p>Price: {product.price}</p>
                       </div>
                   ))}
               </>
           )}
       </div>
   )
}