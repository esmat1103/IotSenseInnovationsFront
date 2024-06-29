import React, { useState } from 'react';
import Image from 'next/image';
import export1 from '../../../public/assets/Table/export.svg';
import edit from '../../../public/assets/Table/edit.svg';
import clear from '../../../public/assets/Table/delete.svg';
import DeleteConfirmation from '@components/Commun/Popups/Sensors/DeleteConfirmationModal';

const TableBodyS = ({ tableData, handleEdit, selectedRows, handleCheckboxChange, handleDelete }) => {
  return (
    <tbody className='darkgrey'>
      {tableData.map((row, index) => (
        <tr key={index} className="table-row-box nunito f12">
          <td>
            <input 
              type="checkbox" 
              className="custom-checkbox" 
              checked={selectedRows.includes(row.id)} 
              onChange={() => handleCheckboxChange(row.id)} 
            />
          </td>
          <td><div className="box-cell f12">{row.id}</div></td>
          <td><div className="box-cell f12">{row.ref}</div></td>
          <td className='pl23'>{row.sensorName}</td>
          <td><div className="box-cell f12">{row.unit}</div></td>
          <td className='pl23'>{row.rangeMin}</td>
          <td>{row.rangeMax}</td>
          <td className='pl23'>{row.thresholdMin}</td>
          <td className='pl23'>{row.thresholdMax}</td>
          <td className='pl23'>{row.startIndex}</td>
          <td className='pl50'>
            <div className={`box-cell f12 ${row.pulse === 'Yes' ? 'box-cellE' : 'box-cellD'}`}>{row.pulse}</div>
          </td>
          <td className='text-center pl23'>
            {row.action}
            <div className="flex justify-center">
              <button onClick={() => handleEdit(row.id)}>
                <Image src={edit} alt='edit' width={20} height={20} />
              </button>
              <button onClick={() => handleEdit(row.id)}>
                <Image src={export1} alt='export' width={20} height={20} />
              </button>
              <button onClick={() => handleDelete(row.id)}>
                <Image src={clear} alt='delete' width={20} height={20} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyS;
