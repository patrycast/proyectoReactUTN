import Header from "./Header";
import {Link, NavLink} from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Header/>
        <h1>Home</h1>
        <Link to={"/producto"}>Productos</Link>
        <NavLink to={"/producto"}>Productos</NavLink>

    </div>
  )
}

export default Home;