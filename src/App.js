import './App.css';
import Navbar from './navbar';
import Contact from './page/Contact';
import Login from './page/Login';
import Signup from './Sign';

import Home from './page/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
