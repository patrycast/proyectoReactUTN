import ProductList from './ProductList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
// import Titulo from './Titulo';
import Home from './Home';
import DetalleArticulo from './DetalleArticulo';




function App() {

  return (
    <BrowserRouter>
      {/* <Titulo/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/producto" element={<ProductList/>}></Route>
        <Route path="/producto/:id" element={<DetalleArticulo/>}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
