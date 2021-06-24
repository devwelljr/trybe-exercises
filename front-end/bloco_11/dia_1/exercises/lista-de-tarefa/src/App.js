import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const compromissos = ['Acordar', 'Tomar Café', 'Estudar', 'Assistir aula'];

function App() {
  return <ul>{compromissos.map((elemento) => Task(elemento))}</ul>;
}

export default App;
