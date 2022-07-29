import { findAllByRole } from '@testing-library/react';
import './NavBar.css'
import Faro from '../../../src/images/faro.jpg'
import CartWidget from '../Cartwidget/CartWidget.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(){
    return(
        <div className='nav-container' >
        
            <img className='img' src={Faro}></img>
        
        <ul className='list'>
            <li className='item'><a href="">Inicio</a></li>
            <li className='item'><a href="">Aromas</a></li>
            <li className='item'><a href="">Deco</a></li>
            <li className='item'><a href="">Textiles</a></li>
        </ul>
        
        <CartWidget/>
        </div>
        
        
    )
}

export default NavBar;