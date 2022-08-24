import React, {useEffect, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import {arrayProducts} from '../../data/data.js'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

let styles = {fontSize: "30px", color: "black", textAlignLast: "center"}

function ItemListContainer(props) {

function getProducts(){
  return new Promise( (resolve) => {
  setTimeout( ()=> resolve(arrayProducts), 500)
  })
}

const [data, setData] = useState([]);
const category = useParams().category;
console.log(category)

useEffect(
  () => {
    getProducts().then((respuesta) => {
      console.log(respuesta)
      if(category){
        let productsCategory = respuesta.filter((product) => product.category == category)
        setData(productsCategory)
      } else {
        setData(respuesta);
      }
      });
  },[category])

  return (
    <div>
      <h2 style={styles}> {props.greeting} </h2>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer;
