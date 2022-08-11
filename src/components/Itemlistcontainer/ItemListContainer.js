import React, {useEffect, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import {arrayProducts} from '../../data/data.js'
import ItemList from '../ItemList/ItemList'

let styles = {fontSize: "15px", color: "black",}

function ItemListContainer(props) {

function getProducts(){
  return new Promise( (resolve) => {
  setTimeout( ()=> resolve(arrayProducts), 2000)
  })
}

const [data, setData] = useState([]);

useEffect(
  () => {
    getProducts().then((respuesta) => {
      console.log(respuesta)
      setData(respuesta);
      });
  },[])

  return (
    <div>
      <h2> {props.greeting} </h2>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer;
