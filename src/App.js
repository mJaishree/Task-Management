//import logo from './logo.svg';
import './App.css';
import { Store } from './Component/Store/Store';
import { Provider } from 'react-redux';
import { Routing } from './Component/Routing';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      
     <Provider store = {Store}> 
        <Routing/>
       </Provider> 
    </div>
  );
}

export default App;
