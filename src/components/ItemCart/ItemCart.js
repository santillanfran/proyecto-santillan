import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import './ItemCart.css'

const ItemCart = ({ product, removeItem }) => {
    //console.log(id)
    return (
        <div className="bg-light itemCart">
            <img src={product.img}  className="imgCart" />
                <div className='detalleCompra'>
                    <h1>PRODUCTO: {product.title}</h1>
                    <hr />
                    <h2>PRECIO x U: {product.price}</h2>
                    <hr />
                    <h2>CANTIDAD: {product.quantity}</h2>
                    <hr />
                    <h2>TOTAL: ${product.price * product.quantity}</h2>
                    <hr />
                    <FontAwesomeIcon className="btn btn-danger m-2" onClick={() => removeItem(product.id)} icon={faTrashCan} />
                </div>
        </div>
    )
}

export default ItemCart;