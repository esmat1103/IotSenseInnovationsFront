import React, { useState } from 'react';

const TableHeaderS = ({ handleHeaderCheckboxChange }) => {
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
        <th className=' '>ID</th>

        <th className=' '>REF</th>
        <th className=' '>Sensor Name</th>
        <th className=' '>Unit</th>
        <th className=' '>Range Min</th>
        <th className=' '>Range Max</th>
        <th className='  '>Threshold Min</th>
        <th className=' '>Threshold Max</th>
        <th className='  '>Start Index</th>
        <th className='pl54'>Pulse</th>
        <th className='center'>Actions</th>


        
      </tr>
    </thead>
  );
};

export default TableHeaderS;