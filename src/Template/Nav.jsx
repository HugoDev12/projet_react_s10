import './Template.css';
import { Link } from "react-router-dom";


function Nav(){
    return <nav className="d-flex justify-content-around">
        <Link to="/search">Recherche</Link>
        <Link to="/home">Accueil</Link>
    </nav>
}

export default Nav;