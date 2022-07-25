import { findAllByRole } from '@testing-library/react';
import './NavBar.css'
import Faro from '../images/faro.jpg'
function NavBar(){
    return(
        <ul>
            <li><img src={Faro}></img></li>
            <li><a href="">Inicio</a></li>
            <li><a href="">Aromas</a></li>
            <li><a href="">Deco</a></li>
            <li><a href="">Textiles</a></li>
        </ul>
    )
}

export default NavBar;