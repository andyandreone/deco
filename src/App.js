import './App.scss';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartContext} from './components/CartContext';



function App() {
  return (
    <div className="App">
        <CartContext>
          
              <AppRouter/>
         
        </CartContext>
    </div>
  );
}

export default App;
