import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import LoginPage from './components/LoginPage';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/loginpage" element={<LoginPage />} />
    


      
        </Routes>
      </Router>

     
    </>
  )
}

export default App
