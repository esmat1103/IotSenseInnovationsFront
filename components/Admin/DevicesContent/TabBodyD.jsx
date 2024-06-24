import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import export1 from '../../../public/assets/Table/export.svg';
import edit from '../../../public/assets/Table/edit.svg';
import clear from '../../../public/assets/Table/delete.svg';
import DeleteConfirmation from '@components/Commun/popups/Devices/DeleteConfirmationModal';

const TableBodyD = ({ tableData, handleEdit, selectedRows, handleCheckboxChange }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const handleDelete = (id) => {
    const itemToDelete = tableData.find(item => item.id === id);
    setDeleteItem(itemToDelete);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
   
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
  return (
    <>

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
          <td className="centered-cell"><div className="box-cell f11">{row.id}</div></td>
          <td className='f11 nunito pl23 darkgrey '>{row.deviceName}</td>
          <td className='f11 nunito  fw600 darkgrey'>{row.macAddress}</td>
          <td className='f11 nunito pl17'><div className="box-cell f11">{row.location}</div></td>
          <td className='f11 nunito pl23'>{row.admin}</td>
          <td className='f11 nunito pl50'>
            {row.clients.split(',').map((client, index) => (
              <div key={index}>
                {client}
              </div>
            ))}
          </td>
          <td className='f11 nunito pl23  '><div className="box-cell f11">{row.sensors}</div></td>
          <td className="f11 nunito  ">
            <div className={row.state === 'Enabled' ? 'box-cellE f11' : 'box-cellD f11'}>
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
      {showDeleteConfirmation && (
        <DeleteConfirmation 
          item={deleteItem} 
          onConfirmDelete={confirmDelete} 
          onCancelDelete={cancelDelete} 
        />
      )}
    </>
  );
};

export default TableBodyD;