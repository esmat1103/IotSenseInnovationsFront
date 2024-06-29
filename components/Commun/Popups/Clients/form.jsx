import React, { useRef, useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for image handling
import returnIcon from '/public/assets/return.svg'; // Assuming return icon path
import profile from '../../../../public/assets/profile.svg'; // Assuming profile image path
import SuccessAlert from '../../Alerts/success-alert'; // Assuming path to SuccessAlert component
import ErrorAlert from '../../Alerts/error-alert'; // Assuming path to ErrorAlert component
import CountryCodeSelector from './CountryFlag'; // Import for country code selector component

const FormClient = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [countryCode, setCountryCode] = useState('+1'); // Initial country code

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
    const phone = `${countryCode}${formData.get('phone')}`;
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const address = formData.get('address');

    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword || !address) {
      setShowErrorAlert(true);
      setPasswordMismatch(false);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      setShowErrorAlert(false);
      return;
    }

    setShowSuccessAlert(true);
    setPasswordMismatch(false);
    e.target.reset();
    setSelectedImage(null);
  };

  const closeSuccessAlert = () => {
    setShowSuccessAlert(false);
  };

  const closeErrorAlert = () => {
    setShowErrorAlert(false);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="form-container-popup nunito">
      {showSuccessAlert && <SuccessAlert message="Client added successfully!" onClose={closeSuccessAlert} />}
      {showErrorAlert && <ErrorAlert message="Please fill in all the fields!" onClose={closeErrorAlert} />}
      {passwordMismatch && <ErrorAlert message="Passwords do not match!" onClose={() => setPasswordMismatch(false)} />}
      <button className="return-button mb-5" onClick={onClose}>
        <Image src={returnIcon} alt="Return" className="return-icon" width={25} height={25} />
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {selectedImage ? (
            <div className="image-container flex" style={{ backgroundImage: `url(${selectedImage})` }}></div>
          ) : (
            <div className="image-placeholder flex justify-center items-center">
              <Image src={profile} alt="placeholder" width={80} height={80} />
            </div>
          )}
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>
        <div className="form-group">
          <div className="flex">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="input-field mr-2"
              placeholder="First Name"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="input-field"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <div className="flex">
            <CountryCodeSelector value={countryCode} onChange={handleCountryCodeChange} />
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input-field"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="address"
            name="address"
            className="input-field"
            placeholder="Full Address"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="input-field"
            placeholder="Confirm Password"
          />
        </div>
        <button className="add-button w-full" type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormClient;
