import React, { useState } from 'react';
import Image from 'next/image';
import TableHeaderD from '@components/Admin/DevicesContent/TabHeaderD';
import TableBodyD from '@components/Admin/DevicesContent/TabBodyD';
import deleteW from '@public/assets/Table/deleteW.svg';
import clear from '@public/assets/Table/delete.svg';
import Pagination from '@components/Commun/Pagination';
import DropdownFilter from '@components/commun/fliter';
import SearchBar from '@components/Admin/ClientContent/search';


const TableD = (language) => {
 
  const [tableData, setTableData] = useState([
    { id: '#FRTL', deviceName: 'Box1', macAddress: '30:c6:f7:00:3c:6c', location: 'Italy', admin: 'John Doe', clients: 'Alice Doe, Bob smith,Alice Doe', sensors: '3', state: 'Enabled' },
    { id: '#LKIH', deviceName: 'Box2', macAddress: '08:3a:f2:44:d0:fc', location: 'Rome', admin: 'Jane Smith', clients: 'Charlie brown, David malhotra', sensors: '8', state: 'Disabled' },
    { id: '#HRGT', deviceName: 'Box3', macAddress: '08:3a:f2:44:d0:52', location: 'Tunisia', admin: 'Eva Brown', clients: 'Grace melliti, Henry khamassi', sensors: '1', state: 'Enabled' },
    { id: '#LMLP', deviceName: 'Box4', macAddress: '08:3a:f2:44:d0:78', location: 'Egypt', admin: 'Michael Johnson', clients: 'Isabella ben salha, James naffeti, Henry khamassi,David malhotra', sensors: '2', state: 'Enabled'  },
    { id: '#JKLO', deviceName: 'Box5', macAddress: '08:3a:f2:44:d0:91', location: 'Spain', admin: 'Sophia Garcia', clients: 'Luis Hernandez, Maria Lopez', sensors: '5', state: 'Disabled' },
    { id: '#PQWE', deviceName: 'Box6', macAddress: '08:3a:f2:44:d0:32', location: 'France', admin: 'Lucas Martin', clients: 'Emma Dubois, Thomas Leroy, Pierre Moreau', sensors: '4', state: 'Enabled' },
    { id: '#TYUI', deviceName: 'Box7', macAddress: '08:3a:f2:44:d0:17', location: 'Germany', admin: 'Mia Schmidt', clients: 'Sophie Wagner, Felix Mueller', sensors: '6', state: 'Enabled' },
    { id: '#ZXCV', deviceName: 'Box8', macAddress: '08:3a:f2:44:d0:56', location: 'United Kingdom', admin: 'Olivia Smith', clients: 'William Brown, Emily Taylor, Daniel Wilson', sensors: '3', state: 'Disabled' },
    { id: '#BNMQ', deviceName: 'Box9', macAddress: '08:3a:f2:44:d0:22', location: 'Switzerland', admin: 'Noah Keller', clients: 'Lea Meier, Timo Fischer', sensors: '7', state: 'Enabled' },
    { id: '#GHJK', deviceName: 'Box10', macAddress: '08:3a:f2:44:d0:87', location: 'Netherlands', admin: 'Eva van der Berg', clients: 'Liam de Boer, Eva van Dijk', sensors: '4', state: 'Enabled' },
    { id: '#WERT', deviceName: 'Box11', macAddress: '08:3a:f2:44:d0:09', location: 'Belgium', admin: 'Adam Dupont', clients: 'Julie Leclerc, Lucas Dubois, Chloe Martin', sensors: '5', state: 'Disabled' },
    { id: '#ASDF', deviceName: 'Box12', macAddress: '08:3a:f2:44:d0:74', location: 'Austria', admin: 'Hannah Schneider', clients: 'Simon Mayer, Laura Wagner', sensors: '2', state: 'Enabled' }

  ]);
  
  
  const [selectedRows, setSelectedRows] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const handleDelete = (id) => {
  };

  const handleEdit = (id) => {
  };

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleHeaderCheckboxChange = () => {
    if (selectedRows.length === tableData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map(row => row.id));
    }
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = currentPage * rowsPerPage;

  const filterOptions = ['Option 1', 'Option 2', 'Option 3'];

  const handleDeleteSelected = () => {
    const updatedData = tableData.filter((row) => !selectedRows.includes(row.id));
    setTableData(updatedData);
    setSelectedRows([]);
  };

  return (
    <div className="container-tab">
  <div className="top-container flex justify-between">
    <div className="top-left-text nunito f30 "></div>
    <div className="top-right-container flex">
     <SearchBar /> 
     <button className="add-button">Add Device</button>
    </div>
  </div>
  <div className='mt-5 table-container'>
    <div className="filters-container flex justify-between">
      <div className="delete-button-container">
        {selectedRows.length > 0 && (
          <button onClick={handleDeleteSelected} className="delete-button flex" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Image src={hovered ? deleteW : clear} alt="clear" width={20} height={20} />
            <p className='mt2 mx-1'>Delete Selected</p>
          </button>
        )}
      </div>
      <div className=''>
        <DropdownFilter options={filterOptions} onChange={(option) => console.log('Selected option:', option)} />
      </div>
    </div>
    <table className="mt-2 table-auto">
      <TableHeaderD handleHeaderCheckboxChange={handleHeaderCheckboxChange} />
      <TableBodyD
        tableData={tableData.slice(startIndex, endIndex)}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        selectedRows={selectedRows}
        handleCheckboxChange={handleCheckboxChange}
      />
      <tfoot>
        <tr>
          <td colSpan="8">
            <div className='pagination-container'>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(tableData.length / rowsPerPage)}
                onPageChange={onPageChange}
              />
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

  );
};

export default TableD;
