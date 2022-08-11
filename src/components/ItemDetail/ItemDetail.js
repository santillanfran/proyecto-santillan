import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({ data }) => {

    const onAdd= (count) => { 
        console.log("Agregaste " + count + " productos a tu carrito") 
    }

    return (
        <div className="itemProduct">
            <div className="itemImage">
                <img src={data.img} alt="img" width="100%" height="100%" />
            </div>
            <div>
                <p className="itemTitle">{data.title}</p>
                <h1 className="itemDescription">{data.description}</h1>
                <p className="itemPrice">${data.price}</p>

                <ItemCount onAdd={onAdd}  stock={data.stock} min={1} />

            </div>

            <button className="buttonVolver">Volver</button>
        </div>
    )
}

export default ItemDetail