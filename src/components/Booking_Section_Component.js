
import React from 'react';
import './book.css'
import FormPageComponent from './FormPage_Component';

const BookingSectionComponent = () => {
  return (
    <div className="booking-section">
      <h3 className="booking-section-head">Book Now!</h3>
      <p className="booking-section-text">
        Don't miss out on this unforgettable journey. Book your spot for the Big Cats Week at Maasai
        Mara - Diwali 2023 special today!
      </p>
      <a href={<FormPageComponent/>} className="book-now-button">
        Book Now
      </a>
    </div>
  );
};

export default BookingSectionComponent;
