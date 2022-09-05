import React, { useEffect, useState } from 'react';
import { arrayProducts } from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import {firestoreDB} from '../../services/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';


const getItemsFromDB = (id) => {

    return new Promise((resolve => {
        const faroCollectionRef = collection(firestoreDB, "faro");
        const docRef = doc(faroCollectionRef, id);

        getDoc(docRef).then(snapshot => {
            resolve(
                { ...snapshot.data(), id: snapshot.id}
            )
        });

    }))
};


const ItemDetailContainer = ({ itemid }) => {
    const id = useParams().id;
    const [data, setData] = useState([])




    useEffect(() => {
        const getItemsFromDB = (id) => {
            return new Promise((resolve) => {
                const faroCollectionRef = collection(firestoreDB, "faro");
                const docRef = doc(faroCollectionRef, id);
                getDoc(docRef).then(snapshot => {
                    resolve(
                        {...snapshot.data(), id: snapshot.id}
                    )
                });
            })
        }

        getItemsFromDB(id).then(product => {
            setData(product)
        })
    }, [id]);
        //getItemsFromDB().then(products => {
        //    let productData = products.filter((product) => product.id == id)
        //   console.log(productData)
        //    setData(productData[0])
        //}).catch(error => {
        //    console.log(error)
        //})
    //}, []);

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;