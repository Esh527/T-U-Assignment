import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Modal from 'react-modal';

import HeaderComponent from './components/Header_Component';
import TimelineComponent from './components/Timeline_Component';
import NavigationComponent from './components/Navigation_Component';
import TrailClosuresComponent from './components/TrailClosures_Component';
import BookingSectionComponent from './components/Booking_Section_Component';
import FooterComponent from './components/Footer_Component';
import PopupComponent from './components/Popup_Component';
import FormPageComponent from './components/FormPage_Component';
import ContactComponent from './components/Contact_Component'

import './styles.css';
import './App.css';
import AboutUsComponent from './components/AboutUs_Component';

function App() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const openPopup = () => {
    setPopupIsOpen(true);
  };

  const closePopup = () => {
    setPopupIsOpen(false);
  };

  return (
    <Router>
    <div className="App">

<header className="header-section">
        <nav className="nav-section">
          <ul className="ul-section">
            <li className="li-section">
            <Link to="/">Home</Link>
            </li>
            <li className="li-section2">
            <Link to="/about">About</Link>
            </li>
            <li className="li-section3">
            <Link to="/contact">Contact</Link>
            </li>
            </ul>
            </nav>
            <h1>Big Cats Week at Maasai Mara - Diwali 2023 special</h1>
            <li className="li-section4"> 
              <button className="button" href="#book-now" onClick={handleBookNowClick}>Book Now</button>
            </li>
           
          
          
        
        
      </header>
      <main>
      <div className="popup-button">
        <button  className="popup-button" onClick={openPopup}>Learn more about November in Maasai Mara</button>
      </div>
      <PopupComponent isOpen={popupIsOpen} onClose={closePopup} />
        <h1></h1>
        <marquee className="marquee-section" direction = "right">{<TrailClosuresComponent/>}</marquee>
        <Routes>
            <Route exact path="/" element={<TimelineComponent/>} />
            <Route exact path="/about" element={<AboutUsComponent/>} />
            <Route exact path="/contact" element={<ContactComponent/>} />
          </Routes>
      </main>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleCloseForm}>Close</button>
            
            <FormPageComponent />
          </div>
        </div>
      )}
      
      
      
    </div>
    </Router>
  );
}

export default App;
