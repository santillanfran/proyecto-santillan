import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { Link } from "react-router-dom"
import { cartContext } from "../../Store/CartContext"
import { useContext } from "react"


const CartWidget = () => {
    const { cart, totalProduct } = useContext(cartContext)
    return (
    <Link to={`cart`}>
        <FontAwesomeIcon className="cartWidget" icon={faCartShopping}></FontAwesomeIcon>
        {cart.length === 0 ?
        <span></span> :
        <span className="badge badge-danger mr-3">{totalProduct()}</span>
        }
    </Link>
)
}
    


export default CartWidget;