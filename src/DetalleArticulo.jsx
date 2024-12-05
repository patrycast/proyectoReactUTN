import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";
import './DetalleArticulo.css';

const DetalleArticulo= ()=>{
    const {id}= useParams();
    const [producto, setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect( ()=>{
        let url=`https://fakestoreapi.com/products/${id}`;
    
    
        async function fetchBack(){
          const response= await fetch(url)
          const data= await response.json()
          console.log(data)
          setProducto(data)
          setIsLoading(false)
        }
        fetchBack()
      },[id])   

      if(isLoading){
        return(<h1>Cargando</h1>)
      }


    return (
    <>
        <Link className='linkProduct' to={"/producto"}>Volver</Link> <br/>
      <div className='productContainer'>
        <h2>{producto.title}</h2>
        <img className='product-img' src={producto.image} alt={producto.title} />
        <p>$ {producto.price}</p>
      </div>
    </>
    )
}

export default DetalleArticulo;