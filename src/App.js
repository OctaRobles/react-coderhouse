
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import Comprs from './components/ComprsUno/ComprsUno';

function App() {
  return (
    <div className="App">
      <header className="">
        <div>
          <NavBar/>
        </div>
        <div>
        <Comprs prop_greeting={"Bienvenida a toda persona!!"}/>
        </div>
      </header>
    </div>
  );
}

export default App;
