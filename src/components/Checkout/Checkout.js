import React from 'react'
import { Link } from 'react-router-dom'


import './Checkout.css'

const Checkout = () => {

    return (
            <div>
                <h1 className="bg-dark rounded m-2 text-center text-light">FINALIZAR COMPRA</h1>
                <form>
                    <h2 className="bg-dark rounded m-2 text-center text-light">COMPLETA TUS DATOS</h2>
                    <label className="formLabel" htmlFor="name">Nombre</label>
                    <input className="form" type="text" name="name" placeholder="Tu Nombre completo" required />
                    <label className="formLabel" htmlFor="surname">Apellido</label>
                    <input className="form" type="text" name="surname" placeholder="Tu Apellido completo" required />
                    <label className="formLabel" htmlFor="email">Email</label>
                    <input className="form" type="email" name="email" placeholder="email@email.com" required />
                    <label className="formLabel" htmlFor="phone">Telefono</label>
                    <input className="form" type="number" name="phone" placeholder="00123456" required />

                    <section className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                            <Link to='/thankyou'><input className="btn btn-primary btn-lg btn-block btnForm"type="submit" value='Comprar'></input> </Link> 
                            <Link to="/"><button className="btn btn-primary btn-lg btn-block btnForm">Seguí con tu compra</button></Link>
                        </div>  
                    </section>

                </form>

            </div>
        )
    }


export default Checkout;