import React from 'react';
import Image from 'next/image';
import clear from '@public/assets/logoutPopout/logoutpopup.svg';

const LogoutConfirmation = ({ onConfirmDelete, onCancelDelete }) => {
    return (
        <div className="darkgrey delete-confirmation-overlay" style={{ zIndex: 9999 }}>
            <div className="delete-confirmation-container">
                <div className='confirmation-message center mb-5'>
                    <div className='mb-2 center1'>
                        <Image src={clear} alt="delete" width={50} height={50} />
                    </div>

                    <p>
                        <span className='fw600 f20 center'>Are you sure?</span><br />
                        <span className='f14'> you want to Logout?</span>
                    </p>
                </div>

                <div className="button-container">
                    <button className="confirm-button" onClick={onConfirmDelete}>Yes, Logout</button>
                    <button className="cancel-button" onClick={onCancelDelete}>No, Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirmation;
