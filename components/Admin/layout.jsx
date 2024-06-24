import React from 'react';
import Sidebar from './sidebar';
import Content from '../content';

const Layout = ({ children }) => {
    return (
        <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
            <div className="flex flex-grow ">
                <Content >{children}</Content>
            </div>
        </div>
    </div>
);
};
  
export default Layout;
