import { createContext, useState } from 'react';

export const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    let copyCart = [...cart];
    
    const addToCart = (item, quantity) => {
        if(isInCart(item.id)) {
            //console.log("esta en el carro")
            const itemRepeat = findItem(item.id)
            //console.log(itemIndex)
            itemRepeat.quantity += quantity;
            setCart(copyCart)
            //console.log(copyCart)
        }else{
            copyCart.push({ ...item, quantity });
            item.stock-= quantity
            setCart(copyCart)
            console.log(copyCart)
        }
    }

    const totalPrice = () => {
        let total = 0;
        cart.map ((item) => total += item.price * item.quantity);
        return total;
    }


    const totalProduct = () => {
        let amountCart = 0;
        cart.map((item) => amountCart += item.quantity);
        return amountCart;
    }

    

    const removeFromCart = (item) => {
        const itemRemove = findItem(item.id)
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCart(copyCart)
    }

    
    const clearCart = () => {
        copyCart = []
        setCart(copyCart);
    }
    

    const isInCart = (id) => {
        return (copyCart.some(itemInCart => itemInCart.id === Number(id)))
    }


    const findItem = (id) =>{
        return (copyCart.find(item => item.id === Number(id)))
    }
    
    return (
        <cartContext.Provider value={{ 
            addToCart, 
            removeFromCart, 
            clearCart, 
            isInCart, 
            totalPrice, 
            totalProduct, 
            cart 
            }}>
        {children}
        </cartContext.Provider>
    );
}