import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
function CartWidget(){ 
return (
    <div className='cart-container'>
    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
    </div>
)
}
export default CartWidget;