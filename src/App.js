import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/forms/Login';
import NavBar from './components/items/NavBar';
import Register from './components/forms/Register';
import Data from './components/api/Data'
function App() {

  return (
    <div className="App">
        <BrowserRouter>
         <NavBar/>
            <Routes>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/register" element ={<Register/>}/>
            <Route path ="/" element ={<Data/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
