import React, { useState, useEffect } from 'react';
import { englishDictionary, frenchDictionary } from '@utils/language/headerDevice';

const TableHeaderD = ({ handleHeaderCheckboxChange }) => {
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
      <tr className="table-header-row">
        <th>
          <input 
            type="checkbox" 
            className="custom-checkbox" 
            onChange={handleHeaderCheckboxChange} 
          />
        </th>
        <th className='f12 nunito'>{dictionary.id}</th>
        <th className='f12 nunito pl23'>{dictionary.name}</th>
        <th className='f12 nunito'>{dictionary.macAddress}</th>
        <th className='f12 nunito pl17'>{dictionary.location}</th>
        <th className='f12 nunito pl23'>{dictionary.admin}</th>
        <th className='f12 nunito pl50'>{dictionary.clients}</th>
        <th className='f12 nunito pr30'>{dictionary.sensors}</th>
        <th className='f12 nunito pl70'>{dictionary.state}</th>
        <th className='f12 nunito pl35'>{dictionary.actions}</th>
      </tr>
    </thead>
  );
};

export default TableHeaderD;
