import "./Item.css"

let stylesButton = { backgroundColor: "goldenrod", borderRadius: "14%", color: "white", margin: "5px", border: "none", cursor: "pointer"}
let stylesPrice = {fontFamily: "'Titillium Web', sans-serif"}
let stylesCategory = {fontFamily: "'Titillium Web', sans-serif"}
let styleTittle = {fontFamily: "'Titillium Web', sans-serif"}

function item({ title, price, img, category }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h3>{title}</h3>
                <p style={stylesCategory}>{category}</p>
                <h3 style={stylesPrice}>$ {price}</h3>
                <button style={stylesButton}>ver más</button>
            </div>
        </div>
    );
}
export default item;