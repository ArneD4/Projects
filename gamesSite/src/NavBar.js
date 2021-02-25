import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { FaBars } from "react-icons/fa"




const NavBar = ({ handleLogout }) => {


    const showlist = () => {
        document.getElementById('nav-ul').classList.toggle('show')
    }

    return (
        <nav>
            <Link exact to="/"><img src="favicon.ico" alt="" /></Link>
            <button className="hamburger" id="hamburger" onClick={showlist}><FaBars /></button>
            <ul id="nav-ul">
                <Link to="/DiceGame">Dice Game</Link>
                <Link to="/JumpGame">Jump Game</Link>
                <Link to="/SnakeGame">Snake Game</Link>
                <button className="logout" onClick={handleLogout}>Logout</button>
            </ul>
            
        </nav>
    );
}

export default NavBar;