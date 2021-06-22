import Greeting from "./Components/Greeting";
import Image from "./Components/Image";
import './App.css';

function App() {
  return (
    <main>
      <Greeting name="Wellington" lastName="Gregorio" />

      <Image src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alt='Cute cat staring'/>
    </main>
  );
}

export default App;
