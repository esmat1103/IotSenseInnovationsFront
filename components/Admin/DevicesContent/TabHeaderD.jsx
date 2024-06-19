import React, { useState } from 'react';

const TableHeaderD = ({ handleHeaderCheckboxChange }) => {
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
        <th className='f12 nunito '>ID</th>
        <th className='f12 nunito  pl23'>Name</th>
        <th className='f12 nunito '>Mac Adress</th>
        <th className='f12 nunito pl17'>Location</th>
        <th className='f12 nunito pl23'>Admin</th>
        <th className='f12 nunito pl50'>Clients</th>
        <th className='f12 nunito pr30'>Sensors</th>
        <th className='f12 nunito pl70'>State</th>
        <th className='f12 nunito pl35'>Actions</th>



      </tr>
    </thead>
  );
};

export default TableHeaderD;