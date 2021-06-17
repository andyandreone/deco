import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
//import FetchData from './components/FetchData';
import 'bootstrap/dist/css/bootstrap.min.css';




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
