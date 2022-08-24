import React, { useEffect, useState } from 'react'
import  { arrayProducts } from '../../data/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const getItem = () => {

    return new Promise((resolve => {
        setTimeout(() => {
            resolve(arrayProducts)
        }, 1500)
    }))
}
const ItemDetailContainer = ( {itemid} ) => {
    const id = useParams().id;
    const [data, setData] = useState([])
    



    useEffect(() => {
        getItem().then(products => {
            let productData = products.filter( (product) => product.id == id)
            console.log(productData)
            setData(productData[0])
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;