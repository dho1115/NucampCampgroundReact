//import React from 'react';
import logo from './logo.svg';
import './App.css';
import CampsitesList from './features/Campsites/CampsitesList';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <CampsitesList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
