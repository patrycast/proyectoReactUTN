import { useState, useEffect } from 'react'
import Articulo from './Articulo'
import './App.css'
import BtnCategory from './BtnCategory'



function App() {
  const [productos, setProductos]= useState([])
  const [category, setCategory]= useState("Todas")

  // ["electronics","jewelery","men's clothing","women's clothing"]

  const handleSetCategory= (categoryChild)=>{
    setCategory(categoryChild)
    console.log(category)
  }

  useEffect( ()=>{
    let url=" "
    if(category ==="Todas"){
      url="https://fakestoreapi.com/products"
    } else {
      url=`https://fakestoreapi.com/products/category/${category}`
    }


    async function fetchBack(){
      const response= await fetch(url)
      const data= await response.json()
      console.log(data)
      setProductos(data)
    }
    fetchBack()
  },[category])


  //filtros
  //fetch (categories)

  useEffect( ()=>{
    console.log("Esto se ve apenas se monta el componente y la variable producto cambia")
  },[productos])

 

  return (
    <>
      <h1>Productos</h1>
      <BtnCategory 
        text={"Electrónica"} 
        category={"electronics"} 
        functionFather={handleSetCategory}
      /> 

      <BtnCategory 
        text={"Joyeria"} 
        category={"jewelery"} 
        functionFather={handleSetCategory}
      />  

      <BtnCategory 
        text={"Ropa de Hombre"} 
        category={"men's clothing"} 
        functionFather={handleSetCategory}
      />

      <BtnCategory 
        text={"Ropa de Mujer"} 
        category={"women's clothing"} 
        functionFather={handleSetCategory}
      />

      {productos.map( (producto)=>( 
        <Articulo key={producto.id} articulo={producto}/>
        ))}
   
    </>
  )
}

export default App
