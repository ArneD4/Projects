import { Link } from 'react-router-dom';
import { FaUtensils } from "react-icons/fa"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="icon">
            <FaUtensils/>
            </div>
            <h1>Eater</h1>
            
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/basket">Basket</Link>
            </div>
        </nav>
    );
}

export default Navbar;