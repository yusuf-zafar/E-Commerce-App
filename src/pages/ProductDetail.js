
import { useParams, useNavigate } from "react-router-dom"
import { useApi } from "../hooks/useApi";
import { useEffect } from "react";

function ProductDetail() {
    const {id} = useParams();
    const{data : product, isLoading, error} = useApi(`http://localhost:3000/products/${id}`);
    const navigate = useNavigate();

    useEffect(()=>{
      if(error){
        alert('Entered product id is invalid');
        navigate('/')
      }
    },[error, navigate]);

  return (
    <>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {product && <div style={{padding:"0 50px"}}>
      <h2>{product.name}</h2>
      <div ><img style={{width:"100px"}} src={product.image}/></div>
      <p>{product.description}</p>
      <strong>Price: {product.price}</strong>
      </div>}
    </>
  )
}

export default ProductDetail