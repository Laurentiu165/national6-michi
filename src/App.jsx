import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
