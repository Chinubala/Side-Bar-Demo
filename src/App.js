import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Calculation from './pages/Calculation.js';
import Bmi from './pages/Bmi.js';
import UserDetails from './pages/UserDetails.js';
import Weather from './pages/Weather.js';



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Calculation />} />
          <Route path="/calculation" element={<Calculation />} />
          <Route path="/aboutUs" element={<UserDetails />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path='/weather' element={<Weather/>}/>
       
        
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;