import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar.js'
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
    
      <ItemListContainer greeting={"Bienvenido a Faro Design"}/>
    
    </div>
    
  );
}

export default App;
