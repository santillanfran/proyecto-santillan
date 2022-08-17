import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import './ItemDetail.css'

const ItemDetail = ({ data }) => {

    const [showCount, setShowCount ] = useState(true)

    const onAdd= (count) => { 
        console.log("Agregaste " + count + " productos a tu carrito") 
        setShowCount(false)
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
                
                {showCount ? (
                    <ItemCount onAdd={onAdd}  stock={data.stock} min={1} />
                ) : (
                    <Link to="/cart"><button className="buttonVolver">Finalizar Compra</button></Link>
                    
                )}

            </div>

            <Link to="/"> <button className="buttonVolver">Volver</button> </Link>
        </div>
    )
}

export default ItemDetail