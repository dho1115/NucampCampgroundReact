//import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CampsitesList from './features/Campsites/CampsitesList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CampsitesDirectoryPage from './Pages/CampsitesDirectoryPage';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <CampsitesDirectoryPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
