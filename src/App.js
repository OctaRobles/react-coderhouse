
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Comprs from './components/ComprsUno/ComprsUno';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <header className="conth">
        <div>
          <NavBar/>
        </div>
        <div>
        <ItemListContainer greeting="Bienvenida a toda persona!!"/>
        <ItemDetailContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
