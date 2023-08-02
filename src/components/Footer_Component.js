import React from 'react';
import './footer.css'

const FooterComponent = () => {
  return (
    <footer className = "footer">
      <div className="costs">
        <h4>Costs</h4>
        <p>
          Cost per adult, Ex Nairobi - USD 1582/- incl of local taxes
          <br />
          Cost per child (4 to 9 years), Ex Nairobi - USD 1400/- incl of taxes
          <br />
          Special Independence Day offer valid for bookings made on or before till August 14th 2023:
          <br />
          Cost per adult - USD 1322
          <br />
          Cost per child - USD 1127
        </p>
      </div>
      <div className="terms">
        <h4>Terms and Conditions</h4>
        {/* Add the terms and conditions text provided */}
        {/* Example: */}
        <p>
          - Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle for Internal
          transfers
          <br />
          - Stay at Mara would be at Zebra plains or Loyk camp or Julia river camp.
          <br />
          - Last day to confirm the tour is August 14th 2023.
          {/* ... other terms ... */}
          {/* ... ... ... */}
        </p>
      </div>
      <div className="payment">
        <h4>Payment terms and Cancellation policy</h4>
        {/* Add the payment terms and cancellation policy text provided */}
        {/* Example: */}
        <p>
          - 100% of the tour cost at the time of booking
          <br />
          - 50% of the tour cost would be given back as credit if the tour is cancelled 60 days before
          the travel dates
          <br />
          - No refund is provided if the tour is cancelled within thirty days of the travel dates
          {/* ... other payment terms ... */}
          {/* ... ... ... */}
        </p>
      </div>
      <div className="inclusions">
        <h4>Inclusions</h4>
        {/* Add the inclusions text provided */}
        {/* Example: */}
        <p>
          - Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared
          basis
          <br />
          - Stay on twin sharing basis at Maasai Mara either at Zebra plains or
          <br />
          - Game drives in Landcruisers in shared basis - minimum 4 paxs per vehicle
          {/* ... other inclusions ... */}
          {/* ... ... ... */}
        </p>
      </div>
      <div className="exclusions">
        <h4>Exclusions</h4>
        {/* Add the exclusions text provided */}
        {/* Example: */}
        <p>
          - Any airfare or VISA charges
          <br />
          - Personal and medical expenses during the tour
          <br />
          - Tips and gratitude
          {/* ... other exclusions ... */}
          {/* ... ... ... */}
        </p>
      </div>
      <div className="bank-details">
        <h4>Bank Details</h4>
        {/* Add the bank details text provided */}
        {/* Example: */}
        <p>
          Bank Details for USD transfers - All payments have to be done to the below-mentioned bank
          only. Any guests wanting to pay in INR have to bear the conversion charges and the transfer
          charges.
        </p>
        {/* Add the PIN CODE and Contacts details */}
        <div className= "contact-details">
        <h4>Contacts:</h4>
        <p>Email:<span>ck@travelunbounded.com</span>, Mobile:+919845090014</p>
        <p>Email:<span>sk@travelunbounded.com</span>, Mobile:+919739255255 </p>
        <p>Email:<span>sg@travelunbounded.com</span>, Mobile:+919884023028 </p>

        </div>
      </div>
      
    
      {/* <div>
      <p>Design and Devloped by the Sri Hari </p>
      </div> */}
    </footer>
  );
};

export default FooterComponent;
