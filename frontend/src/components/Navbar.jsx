import { Link } from "react-router-dom";
import "../assets/css/Navbar.css"
import logo from "../assets/images/logo.png"


function Navbar() {
    
    return ( 
        <>
        <div className="naviii">
            <img id="logo" src={logo}/>
            <Link to={"/UserDash"}>UserDash</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={"/Login"}>Login</Link>
            <Link to={"/Signup"}>Signup</Link>
        </div>
        </>
     );
}

export default Navbar;
