import React, { useState } from 'react';

import { Link, Element } from 'react-scroll';
import BookingSectionComponent from './Booking_Section_Component';

import './form.css';


const FormPageComponent = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    nickname: '',
    branch: '',
    country: '',
    contactNumber: '',
    accountNumber: '',
    accountType: '',
    emailAddress: '',
    swiftCode: '',
    bankCode: '',
    branchCode: '',
    currency: '',
    bankCountry: '',
    pinCode: '',
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: '',
      address: '',
      nickname: '',
      branch: '',
      country: '',
      contactNumber: '',
      accountNumber: '',
      accountType: '',
      emailAddress: '',
      swiftCode: '',
      bankCode: '',
      branchCode: '',
      currency: '',
      bankCountry: '',
      pinCode: '',
    });
  };

  
  React.useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);


  React.useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const toggleFormModal = () => {
    setShowFormModal(!showFormModal);
  };
  return (
    <div className = "form-page">
      <h2  className = "form-page-head">User Details Form</h2>
      <form  className = "form-page-form" onSubmit={handleSubmit}>
        <div className = "form-page-inputs">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />

          <label>address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />

          <label>nickname:</label>
          <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />


          <label>branch:</label>
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} />

          <label>country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />


          <label>contactNumber:</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />

          <label>Account Number:</label>
          <input type="text" name="AccountNumber" value={formData.accountNumber} onChange={handleChange} />

          <label>Account Type:</label>
          <input type="text" name="accountType" value={formData.accountType} onChange={handleChange} />

          <label>EmailAddress:</label>
          <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />



          <label>swiftCode: :</label>
          <input type="text" name="swiftCode: " value={formData.swiftCode } onChange={handleChange} />




          <label>bankCode</label>
          <input type="text" name="bankCode" value={formData.bankCode} onChange={handleChange} />


          <label>branchCode:</label>
          <input type="text" name="branchCode" value={formData.branchCode} onChange={handleChange} />






          <label>Currency:</label>
          <input type="text" name="currency" value={formData.currency} onChange={handleChange} />

          <label>bankCountry:</label>
          <input type="text" name="bankCountry" value={formData.bankCountry} onChange={handleChange} />

          <label>pinCode:</label>
          <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
        
        
        <button className = "btn" type="submit">Submit</button>
        </div>
      </form>

      <div><h2  className = "User-Details-head">User Details Table</h2></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Nickname</th>
            <th>Branch</th>
            <th>Country</th>
            <th>ContactNumber</th>
            <th>AccountNumber</th>
            <th>AccountType</th>
            <th>EmailAddress</th>
            <th>SwiftCode </th>
            <th>BankCode</th>
            <th>BranchCode</th>
            <th>Currency</th>
            <th>BankCountry</th>
            <th>PinCode</th>

            
          </tr>
        </thead>
        <tbody className="body">
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.nickname}</td>
              <td>{user.branch}</td>
              <td>{user.country}</td>
              <td>{user.contactNumber}</td>
              <td>{user.accountNumber}</td>
              <td>{user.accountType}</td>
              <td>{user.emailAddress}</td>
              <td>{user.swiftCode}</td>
              <td>{user.bankCode}</td>
              <td>{user.branchCode}</td>
              <td>{user.currency}</td>
              <td>{user.bankCountry}</td>
              <td>{user.pinCode}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormPageComponent;
