import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar.js'
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './Store/CartContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.js'


function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Faro" />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenido a Faro" />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart /> } />
        </Routes>
        </CartProvider>
        <Footer />
      </Router>



    </div>

  );
}

export default App;
