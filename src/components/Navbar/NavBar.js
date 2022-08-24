import { findAllByRole } from '@testing-library/react';
import './NavBar.css'
import Faro from '../../../src/images/faro.jpg'
import CartWidget from '../Cartwidget/CartWidget'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div className='nav-container' >
        
        <Link to="/"><img className='img' src={Faro}></img> </Link>
        
        <ul className='list'>
            <li className='item'><Link to="/category/aromas">Aromas</Link></li>
            <li className='item'><Link to="/category/deco">Deco</Link></li>
            <li className='item'><Link to="/category/textiles">Textiles</Link></li>
        </ul>
        
        <CartWidget className="cartWidget" />
        </div>
        
        
    )
}

export default NavBar;