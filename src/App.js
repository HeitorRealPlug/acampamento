import './App.css';
import Header from "./components/Header/Header"
import Pag1 from "./components/pag1/Pag1";
import Pag2 from "./components/pag2/Pag2";
import Pag3 from "./components/pag3/Pag3";
import Pag4 from "./components/pag4/Pag4";
import Pag5 from "./components/pag5/Pag5";
function App() {
  return (
    <div id="app" className="App">
      <Header></Header>
        <Pag1></Pag1>
        <Pag2></Pag2>
        <Pag3></Pag3>
        <Pag4></Pag4>
        <Pag5></Pag5>

    </div>
  );
}

export default App;
