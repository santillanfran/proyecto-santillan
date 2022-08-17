import React from 'react'
import Faro from '../../images/faro.jpg'
import './Footer.css'

function Footer (){
    return(
        <footer className='Footer'>
            <div className='listInfo'>
                <ul className='Info'>
                    <li className='itemFooter'>Correo: farodesign@gmail.com</li>
                    <li className='itemFooter'>Tel: 1132185426</li>
                    <li className='itemFooter'><a href='https://www.instagram.com/farodesigndeco/'>Instagram</a></li>
                </ul>
            </div>
            <img className='img' src={Faro}></img>
            <p className='propiedad'>© 2022 Faro Design</p>
        </footer>
    )
}

export default Footer;