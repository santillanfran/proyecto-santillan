import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Store/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = (id) => {
    const { cart, removeFromCart, clearCart, totalPrice, totalProduct } = useContext(cartContext);
    const removeItem = () => {
        removeFromCart(id);
    }
    //console.log(cart)

    const order = {
        buyer: {
        name:'Franco', surname: 'Santillan', email: 'francosantillan@gmail.com', telefono: '1122334455'},
        items: cart.map(item => ({id: item.id, name: item.name, price: item.price, quantity: item.quantity})),
        total: totalPrice(),
    }
    
      //EMITIR ORDENES DEL CARRITO A FIREBASE
        const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({id}) => console.log(id));
    }


    if (cart.length === 0) {
        return (
            <div className="divText">
                <h1 className="cartText">No hay Productos en tu carrito</h1>
                <Link to="/"><button className="button">Volver</button></Link>
            </div>
        )
    } else {
        return (
            <main>
                <h1 className="textCenter">TU CARRITO</h1>
                <ul>

                    {cart.map((product) => {
                        return (
                            <ItemCart
                                key={product.id}
                                product={product}
                                removeItem={removeItem}
                            />
                        )
                    })}
                </ul>

                <section className="cartText">Medios de Pago :
                    <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_50,w_100/v1661189462/medios-pagos/Visa-logo_e8eecm.jpg" alt="" /> <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_100,w_100/v1661189658/medios-pagos/MERCADOPAGO-LOGO_cp8h5d.png" alt="" /> <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_50,w_100/v1661189817/medios-pagos/MasterCard-Logo-1979_jp87gp.jpg" alt="" />
                </section>

                <button onClick={clearCart} className="button">Vaciar Carrito</button>
                <Link to="/product/:id"><button className="button">Volver</button></Link>
                <section className="sectionResumen">
                    <h1 className="cartText">RESUMEN DE TU PEDIDO</h1>
                    <hr />
                    <h2 className="cartText">Cantidad: {totalProduct()}</h2>
                    <hr />
                    <h2 className="cartText">Subtotal: ${totalPrice()}</h2>
                    <hr />
                    <h2 className="cartText">Envio: $250,00</h2>
                    <hr />
                    <h2 className="cartText">Total: ${totalPrice() + 250}</h2>
                    <hr />
                    <div className="buttonFinal">
                    <Link to="/"><button className='buttonSegui'>Seguí con tu compra</button></Link>
                    <Link to="/checkout"><button onClick={handleClick} className='buttonSegui'>Finalizá tu compra</button></Link>
                    </div>
                </section>
            </main>
            
        )
    }
}

export default Cart