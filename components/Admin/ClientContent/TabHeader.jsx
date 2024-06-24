import React, { useState, useEffect } from 'react';
import { englishDictionary, frenchDictionary } from '@app/utils/language/headerClient';

const TableHeader = ({ handleHeaderCheckboxChange }) => {
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
        <th className='f12 nunito '>{dictionary.id}</th>
        <th className='f12 nunito  pl23'>{dictionary.name}</th>
        <th className='f12 nunito '>{dictionary.email}</th>
        <th className='f12 nunito pl17'>{dictionary.phoneNumber}</th>
        <th className='f12 nunito pl23'>{dictionary.createdAt}</th>
        <th className='f12 nunito  center'>{dictionary.actions}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;