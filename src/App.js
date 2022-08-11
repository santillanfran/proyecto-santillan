import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar.js'
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Faro" />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>

      <ItemDetailContainer />

    </div>

  );
}

export default App;
