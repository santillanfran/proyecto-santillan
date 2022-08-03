import React from 'react'
import ItemCount from '../Clickcounter/ItemCount';

let styles = {fontSize: "15px", color: "black",}

function ItemListContainer(props) {
  return (
    <div>
    <h1 style={styles}>{props.greeting}</h1>

    <ItemCount  stock={5} initial={1} onAdd={console.log('Agregaste los productos')} />
    </div>
  )
}

export default ItemListContainer;
