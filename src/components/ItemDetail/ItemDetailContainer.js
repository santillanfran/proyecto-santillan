import React, { useEffect, useState } from 'react'
import dataProducto from '../../data/data'
import ItemDetail from './ItemDetail'



const getItem = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(dataProducto)
        }, 2000)
    }))
}
const ItemDetailContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getItem().then(products => {
            setData(products[0])
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