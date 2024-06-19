import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Notification from '/public/assets/Navbar/notif.svg';
import Pic from '/public/assets/Navbar/picture.jpg';

const Navbar = () => {
    const [language, setLanguage] = useState('English');
    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          setLanguage(storedLanguage);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('language', language);
      }, [language]);

      const toggleLanguage = () => {
        setLanguage(language === 'English' ? 'French' : 'English');
      };

    return (
        <nav className="navbar fixed flex justify-between items-center  bg p-4 z-10 w-full">
            
        <div className="flex items-center  ml-auto">

            <div className="icons-container mt-2 mr-2 flex">
                <button className="flag-button" onClick={toggleLanguage}>
                    {language === 'English' ? (
                        <span className="fi fi-gb"></span>
                    ) : (
                        <span className="fi fi-fr"></span>
                    )}
                </button>
            </div>

            <div className="icons-container mt-2 mr-2 flex items-center justify-center">
                <button className="flex items-center justify-center text-white p-0 m-0">
                    <Image src={Notification} alt='notification' width={15} id="notification-icon" className='m-0' />
                </button>
            </div>
            <div className="profile-container mt-2 mr-2 flex items-center justify-center">
                <button className="flex items-center justify-center text-white p-0 m-0">
                    <Image src={Pic} alt='pic' id="profile-pic" className='m-0' />
                </button>
            </div>
        </div>
    </nav>
    
    );
};

export default Navbar;
