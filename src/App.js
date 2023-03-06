import './App.css';
import Navbar from './navbar';
import Contact from './page/Contact';
import Home from './page/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
