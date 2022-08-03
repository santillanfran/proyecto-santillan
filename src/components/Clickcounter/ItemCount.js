import React, { useState } from 'react';


let styles = { backgroundColor: "goldenrod", borderRadius: "14%", color: "white", margin: "5px", border: "none"}

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

    const onAdd= () => { 
    console.log(counter) 
}

    return(
        <div>
        <h3 className='tituloProducto'>Producto</h3>
        <button style={styles} onClick={ handleDecrement } > - </button>
        <button style={styles} onClick={ handleIncrement } > + </button>
        <h3>Cantidad: {counter}</h3>
        <button style={styles} onClick={ ()=> setCounter (0) } > Limpiar Carrito </button>
        <button style={styles} onClick={onAdd}> Agregar al Carrito </button>
        </div>
    )
}
export default ItemCount;