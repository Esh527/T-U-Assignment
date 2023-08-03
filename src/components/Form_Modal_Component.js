import React from 'react';
import FormPage from './FormPage';

const FormModalComponent = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <FormPage />
      </div>
    </div>
  );
};

export default FormModalComponent;
