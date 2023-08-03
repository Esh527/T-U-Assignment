import React from 'react';
import Modal from 'react-modal';
import './popup.css'

const PopupComponent = ({ isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup Modal"
      ariaHideApp={false} // Prevents a warning related to accessibility
    >
      <div className="popup-content">
        <h2>November is one of the Best times to visit Kenya</h2>
        <p className="popup-content-p">
          November is one of the Best times to visit Kenya, especially to visit its prime park,
          Maasai Mara. This is because the large migratory herds would have returned to Tanzania and
          now the Big cats have to venture long distances to hunt their prey.
          <br />
          November is also the season of short rains. This makes the plains of Maasai Mara lush green.
          The skies are truly dramatic and colourful. The Sun rise and Sun sets during November at
          Mara is simply breathtaking.
          <br />
          November is also a time for holidaying and getting together with our families. And the icing
          on the cake is we have curated this itinerary for such an affordable cost without
          compromising on any of the services. This is to commemorate our first year anniversary of
          opening up operations at Nairobi.
          <br />
          Join us on this unforgettable journey of your lifetime.
        </p>
        <button className="popup-content btn" onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default PopupComponent;
