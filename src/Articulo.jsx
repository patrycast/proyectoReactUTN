import './Articulo.css'
import { useNavigate } from 'react-router-dom';


const Articulo= ({articulo})=>{
    const navigate= useNavigate()
    console.log(articulo)
   

    const handleClick=()=>{
        navigate(`/producto/${articulo.id}`)
    }


    return(
        <>
        
            <div className="container" onClick={handleClick}>
            <img className="img" src={articulo.image} alt={articulo.description} />
            <div className='box'>
                <h2 className="title">{articulo.title}</h2>
                <p className="description">{articulo.description}</p>
                <small className="price">U$D { articulo.price}</small>
            </div>
            </div>
        </>
    )
}



export default Articulo;