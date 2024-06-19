import React from 'react';
import Sidebar from './sidebar';
import Content from '../content';
import Navbar from './navbar';


const LayoutHome = ({ children }) => {
    return (
        <div className="flex">
        <Navbar/>
        <Sidebar />
        <div className="flex flex-col flex-grow">
            <div className="flex flex-grow ">
                <Content >{children}</Content>
            </div>
        </div>
    </div>
);
  };
  
export default LayoutHome;
