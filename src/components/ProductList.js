import { useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import './ProductList.css';
 
export default function ProductList() {
   const [url, setUrl] = useState('http://localhost:3000/products');
   const { data: products, isLoading, error } = useApi(url);
 
   return (
       <div className="product-list">
           <h2>Product List</h2>
           <div className="filters">
               <button onClick={() => setUrl('http://localhost:3000/products')}>
                   All
               </button>
               <button onClick={() => setUrl('http://localhost:3000/products?category=mobile')}>
                   Mobiles
               </button>
               <button onClick={() => setUrl('http://localhost:3000/products?category=tv')}>
                   TVs
               </button>
               <button onClick={() => setUrl('http://localhost:3000/products?category=washing-machine')}>
                   Washing Machines
               </button>
           </div>
           {isLoading && <div>Loading...</div>}
           {error && <div>{error}</div>}
           <ul>
               {products && products.map(product => (
                   <li key={product.id}>
                       <h3>{product.name}</h3>
                       <p>Price: {product.price}</p>
                       <Link to={`/products/${product.id}`}>Read more...</Link>
                       <div><img src={product.image}/></div>
                   </li>
               ))}
           </ul>
       </div>
   )
}








