import React, { useState, useEffect } from 'react';

const HeaderC = ({ handleHeaderCheckboxChange }) => {
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
        <th className='f10 nunito'>Client ID</th>
        <th className='f10 nunito '>Client Name</th>
        <th className='f10 nunito'>Complaint Details</th>
        <th className='f10 nunito  '>Status</th>
        <th className='f10 nunito '>Action Due</th>
        <th className='f10 nunito center '>Date & Time</th>
        <th className='f10 nunito'>Sensor ID</th>
        <th className='f10 nunito'>Sensor Type</th>
        <th className='f10 nunito'>Sensor Status</th>
        <th className='f10 nunito '>Sensor Urgency</th>
        <th className='f10 nunito '>Last Recorded Data</th>
        <th className='f10 nunito '>Last Communication</th>
       
      </tr>
    </thead>
  );
};

export default HeaderC;
