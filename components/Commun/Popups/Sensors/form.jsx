import React, { useState } from 'react';
import Image from 'next/image';
import returnIcon from '/public/assets/return.svg';
import SuccessAlert from '../../Alerts/success-alert';
import ErrorAlert from '../../Alerts/error-alert';


const FormSensor = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
  
    if (!firstName || !lastName || !email || !phone || !password) {
      setShowErrorAlert(true); 
      return;
    }
    setShowSuccessAlert(true);
    e.target.reset();
    setSelectedImage(null);
  };
  

  const closeSuccessAlert = () => {
    setShowSuccessAlert(false);
  };

  const closeErrorAlert = () => {
    setShowErrorAlert(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="form-container-popup nunito">
       {showSuccessAlert && <SuccessAlert message="Client added successfully !" onClose={closeSuccessAlert} />}
       {showErrorAlert && <ErrorAlert message="Please fill in all the fields !" onClose={closeErrorAlert} />}
      <button className="return-button mb-5" onClick={onClose}>
        <Image src={returnIcon} alt="Return" className="return-icon" height={25} />
      </button>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <input
            type="number"
            id="sensorNumber"
            name="sensorNumber"
            className="input-field"
            placeholder="Sensor Number"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="sensorName"
            name="sensorName"
            className="input-field"
            placeholder="Sensor Name"
          />
        </div>
        <div className="form-group select-container ">
          <select
            id="unit"
            name="unit"
            className="input-field custom-select"
            placeholder="Unit"
          >
            <option disabled selected>Unit</option>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
        <div className="flex">
          <input
            type="number"
            id="rangeMin"
            name="rangeMin"
            className="input-field mr-2"
            placeholder="Range Min"
          />
          <input
            type="number"
            id="rangeMax"
            name="rangeMax"
            className="input-field"
            placeholder="Range Max"
          />
          </div>
        </div>
        <div className="form-group">
          <div className='flex'>
          <input
            type="number"
            id="thresholdMin"
            name="thresholdMin"
            className="input-field mr-2"
            placeholder="Threshold Min"
          />
          <input
            type="number"
            id="thresholdMax"
            name="thresholdMax"
            className="input-field"
            placeholder="Threshold Max"
          />
          </div>
        </div>
        <div className="form-group">
          <input
            type="number"
            id="startIndex"
            name="startIndex"
            className="input-field"
            placeholder="Start Index"
          />
        </div>
        <div className="form-group select-container">
          <select
            id="pulse"
            name="pulse"
            className="input-field custom-select"
            placeholder="Pulse"
          >
            <option disabled selected>Pulse</option>
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>
        </div>
        <button className='add-button w-full' type="submit">Add</button>
      </form>
    </div>
  );
};


export default FormSensor;
