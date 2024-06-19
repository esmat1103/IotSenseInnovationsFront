import React, { useState, useEffect } from 'react';
import { englishDictionary, frenchDictionary } from '@utils/language/headerSensor';

const TableHeaderS = ({ handleHeaderCheckboxChange }) => {
  const [language, setLanguage] = useState('English'); 

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const dictionary = language === 'French' ? frenchDictionary : englishDictionary;
  
  return (
    <thead className="table-header darkgrey">
      <tr className="table-header-row f12 nunito">
        <th>
          <input 
            type="checkbox" 
            className="custom-checkbox" 
            onChange={handleHeaderCheckboxChange} 
          />
        </th>
        <th>{dictionary.id}</th>
        <th>{dictionary.ref}</th>
        <th>{dictionary.name}</th>
        <th>{dictionary.unit}</th>
        <th>{dictionary.rangeMin}</th>
        <th>{dictionary.rangeMax}</th>
        <th>{dictionary.thresholdMin}</th>
        <th>{dictionary.thresholdMax}</th>
        <th>{dictionary.startIndex}</th>
        <th className="pl54">{dictionary.pulse}</th>
        <th className="center">{dictionary.actions}</th>
      </tr>
    </thead>
  );
};

export default TableHeaderS;
