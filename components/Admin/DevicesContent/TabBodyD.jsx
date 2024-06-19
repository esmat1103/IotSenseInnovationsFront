import React from 'react';
import Image from 'next/image';
import export1 from '../../../public/assets/Table/export.svg';
import edit from '../../../public/assets/Table/edit.svg';
import clear from '../../../public/assets/Table/delete.svg';

const TableBodyD = ({ tableData, handleDelete, handleEdit, selectedRows, handleCheckboxChange }) => {
  return (
    <tbody className='darkgrey'>
      {tableData.map((row) => (
        <tr 
          key={row.id} 
          className="table-row-box  nunito" 
        >
          <td>
            <input 
              type="checkbox" 
              className="custom-checkbox" 
              checked={selectedRows.includes(row.id)} 
              onChange={() => handleCheckboxChange(row.id)} 
            />
          </td>
          <td className="centered-cell"><div className="box-cell f12">{row.id}</div></td>
          <td className='f12 nunito pl23 darkgrey '>{row.deviceName}</td>
          <td className='f12 nunito  fw600 darkgrey'>{row.macAddress}</td>
          <td className='f12 nunito pl17'><div className="box-cell f12">{row.location}</div></td>
          <td className='f12 nunito pl23'>{row.admin}</td>
          <td className='f12 nunito pl50'>
            {row.clients.split(',').map((client, index) => (
              <div key={index}>
                {client}
              </div>
            ))}
          </td>
          <td className='f12 nunito pl23  '><div className="box-cell f12">{row.sensors}</div></td>
          <td className="f12 nunito  ">
            <div className={row.state === 'Enabled' ? 'box-cellE f12' : 'box-cellD f12'}>
              {row.state}
            </div>
          </td>
          <td className="text-center">
            <div className="flex justify-center ">
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

export default TableBodyD;
