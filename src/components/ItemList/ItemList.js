import Item from '../Items/Item.js'
import "./ItemList.css"

function ItemList ({data}) {
    return (
        <div className='list-container'>
        {
        data.map((product) => {
        return (
        <Item
        key={product.id}
        title={product.title}
        category={product.category}
        img={product.img}
        price={product.price}
        /> 
        );
        })}
        </div>
    );

}

export default ItemList