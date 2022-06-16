//import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CampsitesList from './features/Campsites/CampsitesList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CampsitesDirectoryPage from './Pages/CampsitesDirectoryPage';
import { Route, Routes } from 'react-router-dom';
import Contactpage from './Pages/Contactpage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='contact' element={<Contactpage />} />
            <Route path='directory' element={<CampsitesDirectoryPage />} />
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
