import './App.css';
import Body from './components/AppBody/Body';
import Header from "./components/Header/Header"

function App() {
  return (
    //BEM naming convertion
    <div className="App">
      
      <Header/>
      <Body/>
      

    </div>
  );
}

export default App;
