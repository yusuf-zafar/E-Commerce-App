import { useNavigate, Outlet } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import './Orders.css';
 
export default function Orders() {
   const { data: orders, isLoading, error } = useApi('http://localhost:3000/orders');
   const navigate = useNavigate();
 
   return (
       <>
           {isLoading && <div>Loading...</div>}
           {error && <div>{error}</div>}
           <div className="orders-container">
               <div className="orders-list">
                   <ul>
                       {orders && orders.map(order => (
                           <li key={order.id} onClick={() => navigate(`/orders/${order.id}`)}>
                               <h3>Order Id: {order.id}</h3>
                               <strong>Price: {order.totalPrice}</strong>
                           </li>
                       ))}
                   </ul>
               </div>
               <div className="orders-detail">
                <Outlet/>
               </div>
           </div>
       </>
   )
}