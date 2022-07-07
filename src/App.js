//import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';
// import CampsitesList from './features/Campsites/CampsitesList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CampsitesDirectoryPage from './Pages/CampsitesDirectoryPage';
import { Route, Routes } from 'react-router-dom';
import Contactpage from './Pages/Contactpage';
import Homepage from './Pages/Homepage';
import CampsiteDetailPage from './Pages/CampsiteDetailPage';
import AboutPage from './Pages/AboutPage';
import { fetchCampsites } from './features/Campsites/campsitesSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites())
    return () => {
      
    }
  }, [dispatch]);

  return (
    <div className="App">
      <div>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='contact' element={<Contactpage />} />
            <Route path='directory' element={<CampsitesDirectoryPage />} />
            <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
