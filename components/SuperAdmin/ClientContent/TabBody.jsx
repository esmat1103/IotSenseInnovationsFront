import React, { useState } from 'react';
import Image from 'next/image';
import clear from '../../../public/assets/Table/delete.svg';
import edit from '../../../public/assets/Table/edit.svg';
import DeleteConfirmation from '@components/Commun/Popups/Clients/DeleteConfirmationModal';

const TableBody = ({ tableData, handleEdit, selectedRows, handleCheckboxChange }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

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
            className="table-row-box f12 nunito" 
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
            <td className="flex items-center ">
              <div className='profile-container'>
                <Image src={row.imageUrl} alt={`${row.firstName} ${row.lastName}`} width={50} height={50} className="mr-2" id='profile-pic' />
              </div>
              <span className='fw600'>{row.firstName} {row.lastName}</span>
            </td>
            <td>{row.email}</td>
            <td className="centered-cell"><div className="box-cell">{row.phoneNumber}</div></td>
            <td className="centered-cell pl23"><div className="box-cell ">{row.createdAt}</div></td>
            <td className="text-center  pl23">
              <div className="flex justify-center ">
                <button onClick={() => handleEdit(row.id)}>
                  <Image src={edit} alt='edit' width={20} height={20} />
                </button>
                <button onClick={() => {
                  setDeleteItem(row);
                  setShowDeleteConfirmation(true);
                }}>
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

export default TableBody;
