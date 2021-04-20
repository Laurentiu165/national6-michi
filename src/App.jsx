import { Header } from "./components/Header/Header"
import { ToDoItem } from "./components/ToDoItem/ToDoItem"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ToDoItem/>
    </div>
  );
}

export default App;
