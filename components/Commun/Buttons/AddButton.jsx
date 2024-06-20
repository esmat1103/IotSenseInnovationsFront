// components/Commun/AddButton.jsx

import React from 'react';

const AddButton = ({ onClick, text }) => {
  return (
    <button className="add-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default AddButton;
