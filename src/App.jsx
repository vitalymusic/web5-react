import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header'
import Fūteris from './Components/Footer';
import CardGrid from './Components/CardGrid';
import Navigacija from './Components/Navigacija';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




function App() {

  return (
    <>
      <Navigacija></Navigacija>
      <Header ></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        </BrowserRouter >
    <Fūteris></Fūteris>
    </>
  )
}

export default App
