import React from 'react'


let styles = {fontSize: "15px", color: "black",}

function ItemListContainer(props) {
  return (
    <div>
    <h1 style={styles}>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer;
