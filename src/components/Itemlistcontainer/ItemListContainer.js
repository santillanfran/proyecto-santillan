import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import firestoreDB from '../../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


let styles = {fontSize: "30px", color: "black", textAlignLast: "center"}



function ItemListContainer(props) {

  const getProducts = () => {
    return new Promise((resolve) => {

      const faroCollection = collection(firestoreDB, 'faro');

      getDocs(faroCollection).then(snapshot => {
        const docsData = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        });
        resolve(docsData)
      })
    })
  }
      const getItemsFromDBCategory = (category) => {
        return new Promise((resolve) =>{
          const faroCollection = collection(firestoreDB, 'faro');
          const queryProducts = query(faroCollection, where('category', '==', category))
          getDocs(queryProducts).then(snapshot => {
            const docsData = snapshot.docs.map(doc => {
              return { ...doc.data(), id: doc.id }
            })
            resolve(docsData);
          })
      })
    }

const [data, setData] = useState([]);
const category = useParams().category;
console.log(category)

useEffect(() => {
  if(category){
    getItemsFromDBCategory(category).then((resolve) => {
      setData(resolve)
    })
  } else {
    getProducts().then((resolve) => {
      setData(resolve)
    })
  }
  });



  //getProducts().then((respuesta) => {
    //  console.log(respuesta)
     // if(category){
     //   let productsCategory = respuesta.filter((product) => product.category == category)
      //  setData(productsCategory)
     // } else {
      //  setData(respuesta);
     // }
     // });
    // },[category]) 

  return  (
    <div>
      <h2 style={styles}> {props.greeting} </h2>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer;
