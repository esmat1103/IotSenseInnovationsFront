import React from 'react';
import Image from 'next/image';
import clear from '@public/assets/popupDeleteModal/clearPop.svg';

const DeleteConfirmation = ({ item, onConfirmDelete, onCancelDelete }) => {
  return (
    <div className=" darkgrey delete-confirmation-overlay">
      <div className="delete-confirmation-container">
        <p className='confirmation-message  center mb-5'>
            <div className=' mb-2 center1'> 
                <Image  src={clear} width={50} height={50}/>
            </div>
        
          <span className='fw600 f20 center'>Are you sure?</span><br />
          <span className='f14'> You want to delete the device "</span>  
          <span className='fw600 f12'> {item.deviceName}</span>
          <span className='f14'>" located at</span>
          <span className='fw600 f12'> {item.location}</span>
          <span className='f14'>, managed by </span>
          <span className='fw600 f12'> {item.admin}</span>?
        </p>
        <div className="button-container">
          <button className="confirm-button" onClick={onConfirmDelete}>Yes, Delete</button>
          <button className="cancel-button" onClick={onCancelDelete}>No, Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
