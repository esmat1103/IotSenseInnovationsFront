import React, { useState } from 'react';
import DeleteConfirmation from '@components/Commun/Popups/Clients/DeleteConfirmationModal';
import Image from 'next/image';
import chevronOR from '../../../public/assets/Table/chevronOR.svg';
import chevronBL from '../../../public/assets/Table/chevronBL.svg';
import chevronRED from '../../../public/assets/Table/chevronRED.svg';

const TableBody = ({ tableData, handleDelete, handleEdit, selectedRows, handleCheckboxChange }) => {
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
    <tbody>
      {tableData.map((row, index) => (
        <tr key={index} className="table-row-box">
          <td>
            <input 
              type="checkbox" 
              className="custom-checkbox" 
            />
          </td>
          <td className="f11 nunito centered-cell"> <div className='box-cell'>{row.id}</div></td>
          <td className="f11 nunito fw600 ">{row.clientName}</td>
          <td className="f11 nunito">{row.complaintDetails}</td>
          <td className="f11 nunito centered-cell"> 
        <div className={`box-cell f12 ${row.status === 'Resolved' ? 'box-cellE' : row.status === 'In Progress' ? 'box-cellD' : 'box-cellH'}`}>
            <div className='flex'>
            {row.status}
            {row.status === 'Open' && <span className='pl-1'><Image src={chevronRED} alt="chevron" width={15} height={15} /></span>}
            {row.status === 'Resolved' && <span className='pl-1'><Image src={chevronBL} alt="chevron" width={15} height={15} /></span>}
            {row.status === 'In Progress' && <span className='pl-1'><Image src={chevronOR} alt="chevron" width={15} height={15} /></span>}
            </div>
        </div>
     </td>


          <td className="f11 nunito ">{row.actionDue}</td>
          <td className="f11 nunito ">{row.dateTime}</td>
          <td className="f11 nunito  center centered-cell"><div className='box-cell'>{row.sensorId}</div></td>
          <td className="f11 nunito center">{row.sensorType}</td>
          <td className="f11 nunito center  ">
               <div className={`box-cell f12   ${row.sensorStatus === 'Active' ? 'box-cellE' :  'box-cellH' }`}>
                        {row.sensorStatus}
                </div>

          </td>
          <td className="f11 nunito centered-cell center ">
            <div className={`box-cell f12   ${row.sensorUrgency === 'Low' ? 'box-cellE' : row.sensorUrgency === 'Medium' ? 'box-cellD' : 'box-cellH'}`}>
                    {row.sensorUrgency}

            </div>
          </td>
          <td className="f11 nunito center centered-cell"> <div className='box-cell'>{row.lastRecordedData} </div></td>
          <td className="f11 nunito center ">{row.lastCommunication}</td>
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
