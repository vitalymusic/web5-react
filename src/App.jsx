import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header'
import Fūteris from './Components/Footer';
import Navigacija from './Components/Navigacija';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './Pages/User';
import Users from './Pages/Users';




function App() {

  return (
    <>
      <BrowserRouter>
        <Navigacija></Navigacija>
        <Header ></Header>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />

        </Routes>

       
      <Fūteris></Fūteris>
     </BrowserRouter >
    </>
  )
}

export default App
