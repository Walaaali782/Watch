import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/1-header/Header";
import './App.css';
import Slider from "./components/2-slider/Slider";
import Contact from './components/7-Contact/Contact';
import ContactLIst from './components/7-Contact/ContactLIst';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Slider />
      
        </>} />

  
        <Route path="/Contact" element={<>
          <Contact />
          <ContactLIst/>
        </>} />





      </Routes>

    </div>
  );
}

export default App;
