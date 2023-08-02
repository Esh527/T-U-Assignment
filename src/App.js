import React, { useState } from 'react';
import Modal from 'react-modal';

import HeaderComponent from './components/Header_Component';
import TimelineComponent from './components/Timeline_Component';
import NavigationComponent from './components/Navigation_Component';
import TrailClosuresComponent from './components/TrailClosures_Component';
import BookingSectionComponent from './components/Booking_Section_Component';
import FooterComponent from './components/Footer_Component';
import PopupComponent from './components/Popup_Component';
import FormPageComponent from './components/FormPage_Component';
import './styles.css';

function App() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const openPopup = () => {
    setPopupIsOpen(true);
  };

  const closePopup = () => {
    setPopupIsOpen(false);
  };

  return (
    <div className="App">
      
      <HeaderComponent />
      {/* <NavigationComponent/> */}
      <TimelineComponent />
      <TrailClosuresComponent/>
      <BookingSectionComponent/>
      <br/>
      <FooterComponent/>
      <div className="popup-button">
        <button onClick={openPopup}>Learn more about November in Maasai Mara</button>
      </div>
      <PopupComponent isOpen={popupIsOpen} onClose={closePopup} />

      <br/><br/>

      <br/><br/>
      <FormPageComponent/>
    </div>
  );
}

export default App;
