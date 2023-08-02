import React from 'react';
import TimelineComponent from './Timeline_Component';
import PopupComponent from './Popup_Component';
import FormPageComponent from './FormPage_Component';

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list1">
          <a href={<PopupComponent/>}>Overview</a>
        </li>
        <li className="navigation-list2">
          <a href={<TimelineComponent/>}>Itinerary</a>
        </li>
        <li className="navigation-list3">
          <a href="#costs">Costs</a>
        </li>
        <li className="navigation-list4">
          <a href={<FormPageComponent/>}>Booking</a>
        </li>
      </ul>
    </nav>
      <h1>Big Cats Week at Maasai Mara - Diwali 2023 special</h1>
      <p></p>
    </header>
    
  );
};

export default HeaderComponent;
