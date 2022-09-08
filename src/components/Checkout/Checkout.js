import React,  {useState, useContext} from 'react'
import { getFirestore } from 'firebase/firestore';
import { cartContext } from '../../Store/CartContext';
import { Link } from 'react-router-dom'


import './Checkout.css'

const Checkout = () => {

    const { cart, totalPrice, totalProduct } = useContext(cartContext);
    const [orderMade, setOrderMade] = useState(false)
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const newOrder = {
            buyer: formData,
            cart,
            totalPrice,
            date: new Date()
        }
        console.log(newOrder)

        const db = getFirestore()
        const ordersCollection = db.collection("orders")

        ordersCollection
        .add(newOrder)
        .then(() => setOrderMade(true))
        .catch((error) => console.log(error))


    }



    return (
            <div>
                <h1 className="bg-dark rounded m-2 text-center text-light">FINALIZAR COMPRA</h1>
                <form onSubmit={handleSubmit} >
                    <h2 className="bg-dark rounded m-2 text-center text-light">COMPLETA TUS DATOS</h2>
                    <label className="formLabel" htmlFor="name">Nombre</label>
                    <input className="form" type="text" name="nombre" onChange={handleInputChange} placeholder="Tu Nombre completo" required />
                    <label className="formLabel" htmlFor="surname">Apellido</label>
                    <input className="form" type="text" name="apellido" onChange={handleInputChange} placeholder="Tu Apellido completo" required />
                    <label className="formLabel" htmlFor="email">Email</label>
                    <input className="form" type="email" name="email"  onChange={handleInputChange} placeholder="email@email.com" required />
                    <label className="formLabel" htmlFor="phone">Telefono</label>
                    <input className="form" type="number" name="telefono" onChange={handleInputChange} placeholder="00123456" required />

                    {orderMade ? ( 
                        <h4> Gracias por tu compra! </h4>
                    ) : (
                        <section className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                            <Link to='/thankyou'><input className="btn btn-primary btn-lg btn-block btnForm"type="submit" value='Comprar'></input> </Link> 
                            <Link to="/"><button className="btn btn-primary btn-lg btn-block btnForm">Seguí con tu compra</button></Link>
                        </div>  
                    </section>
                    )}

                </form>

            </div>
        )
    }


export default Checkout;