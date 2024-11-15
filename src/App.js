
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Private from './Components/Private';
import Welcome from './Components/Welcome';
import Dashboard from './Components/Dsahboard';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>

        <Route path='/user' element={<Private/>}>

          <Route path='' element={<Welcome/>}/>
          <Route path='/user/dashboard' element={<Dashboard/>}/>

        </Route>
      </Routes>
    </div>
    
    </BrowserRouter>  
  
  
  );
}

export default App;
