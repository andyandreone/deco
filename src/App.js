import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
//import FetchData from './components/FetchData';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/> 
      {/*<FetchData/>*/}
    </div>
  );
}

export default App;
