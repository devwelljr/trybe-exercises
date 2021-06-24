import './App.css';
import pokemons from './data';
import Pokedex from './Components/Pokedex';

function App() {
  return (
    <div className="divPokemons">
    <h1> Pokedex </h1>
    <hr />
    <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
