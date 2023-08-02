
import React from 'react';
import './navigation.css';

const NavigationComponent = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list1">
          <a href="#overview">Overview</a>
        </li>
        <li className="navigation-list2">
          <a href="#itinerary">Itinerary</a>
        </li>
        <li className="navigation-list3">
          <a href="#costs">Costs</a>
        </li>
        <li className="navigation-list4">
          <a href="#booking">Booking</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationComponent;
