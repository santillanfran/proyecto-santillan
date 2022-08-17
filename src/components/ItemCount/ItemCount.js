import React, { useState } from 'react';
import  './ItemCount.css'

let styles = { backgroundColor: "goldenrod", borderRadius: "14%", color: "white", margin: "21px", cursor: "pointer"}

function ItemCount(props){

    const [counter, setCounter] = useState(1);
    let stock = 5

    const handleIncrement= () => {

        if (counter < stock){ 
        setCounter(counter + 1)}   
    }

    const handleDecrement= () => {

        if (counter > 0){ 
        setCounter(counter - 1)}
    }


    return(
        <div className='ItemCounter'>
        <button style={styles} onClick={ handleDecrement } > - </button>
        <h3 className='ItemCantidad'> {counter}</h3>
        <button style={styles} onClick={ handleIncrement } > + </button>
        <button style={styles} onClick={ ()=> setCounter (0) } > Limpiar Carrito </button>
        <button style={styles} onClick={() => props.onAdd(counter) }> Agregar al Carrito </button>
        </div>

    )
}
export default ItemCount;