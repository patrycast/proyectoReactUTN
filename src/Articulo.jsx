import './Articulo.css'

const Articulo= ({articulo})=>{
    return(
        <>
        
            <div className="container">
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