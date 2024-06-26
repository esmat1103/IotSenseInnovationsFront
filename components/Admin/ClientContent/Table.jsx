import React, { useState } from 'react';
import TableHeader from './TabHeader';
import TableBody from './TabBody';
import AddButton from '@components/Commun/Buttons/AddButton';
import cl1 from '../../../public/assets/Table/1.png';
import cl5 from '../../../public/assets/Table/cl5.jpeg';
import cl2 from '../../../public/assets/Table/cl2.jpeg';
import cl3 from '../../../public/assets/Table/cl3.jpeg';
import cl4 from '../../../public/assets/Table/cl4.jpeg';
import deleteW from '../../../public/assets/Table/deleteW.svg';
import Pagination from '../../Commun/Pagination';
import SearchBar from './search';
import FormClient from '@components/Commun/Popups/Clients/form';
import DateFilter from '@components/Commun/date-filter';
import DropdownFilter from '../../commun/fliter';
import DeleteAllButton from '@components/Commun/Buttons/DeleteAllButton';
import DeleteConfirmation from '@components/Commun/Popups/DeleteAllConfirmation';

const Table = () => {
  const [tableData, setTableData] = useState([
    { id: '#FRTL',  firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phoneNumber: '9876543210', createdAt: '2024-06-14', imageUrl: cl1},
    { id: '#LKIH',  firstName: 'John', lastName: 'Smith', email: 'john@example.com', phoneNumber: '9876543211', createdAt: '2024-06-14', imageUrl: cl2 },
    { id: '#XCVB',  firstName: 'Mary', lastName: 'Johnson', email: 'mary@example.com', phoneNumber: '9876543212', createdAt: '2024-06-14', imageUrl: cl3 },
    { id: '#QWER',  firstName: 'James', lastName: 'Brown', email: 'james@example.com', phoneNumber: '9876543213', createdAt: '2024-06-14', imageUrl: cl4 },
    { id: '#TYUI',  firstName: 'Emily', lastName: 'Davis', email: 'emily@example.com', phoneNumber: '9876543214', createdAt: '2024-06-14', imageUrl: cl5 },
    { id: '#FRTL1', firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phoneNumber: '9876543210', createdAt: '2024-06-14', imageUrl: cl1},
    { id: '#LKIH2', firstName: 'John', lastName: 'Smith', email: 'john@example.com', phoneNumber: '9876543211', createdAt: '2024-06-14', imageUrl: cl2 },
    { id: '#XCVB3', firstName: 'Mary', lastName: 'Johnson', email: 'mary@example.com', phoneNumber: '9876543212', createdAt: '2024-06-14', imageUrl: cl3 },
    { id: '#QWER4', firstName: 'James', lastName: 'Brown', email: 'james@example.com', phoneNumber: '9876543213', createdAt: '2024-06-14', imageUrl: cl4 },
    { id: '#XCVB5', firstName: 'Mary', lastName: 'Johnson', email: 'mary@example.com', phoneNumber: '9876543212', createdAt: '2024-06-14', imageUrl: cl3 },
    { id: '#QWER6', firstName: 'James', lastName: 'Brown', email: 'james@example.com', phoneNumber: '9876543213', createdAt: '2024-06-14', imageUrl: cl4 },    
  ]);

  
  const [selectedRows, setSelectedRows] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); 
  const [deleteItem, setDeleteItem] = useState(null); 


  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

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
    setShowDeleteConfirmation(true); 
  };
  
  const confirmDelete = () => {
    const updatedData = tableData.filter((row) => !selectedRows.includes(row.id));
    setTableData(updatedData);
    setSelectedRows([]);
    setShowDeleteConfirmation(false);
  };
  

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="container-tab">
      <div className="top-container flex justify-between">
        <div className="top-left-text nunito f30 "></div>
        <div className="top-right-container flex">
          <SearchBar />
          <AddButton text="Add Client" onClick={toggleForm} />
        </div>
      </div>
      <div className='mt-5 table-container'>
        <div className="filters-container flex justify-between">
          <div className="delete-button-container">
          {selectedRows.length > 0 && (
            <DeleteAllButton
              onClick={handleDeleteSelected}
              hovered={hovered}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              buttonText="Delete Selected"
              imageSrc={deleteW}
              altText="delete"
            />
          )}
          </div>
          <div className='flex mt-2 mb-1'>
            <DateFilter onChange={(date) => console.log('Selected date:', date)} />
            <DropdownFilter options={filterOptions} onChange={(option) => console.log('Selected option:', option)} />
          </div>
        </div>
        <table className=" table-auto">
          <TableHeader handleHeaderCheckboxChange={handleHeaderCheckboxChange} />
          <TableBody
            tableData={tableData.slice(startIndex, endIndex)}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            selectedRows={selectedRows}
            handleCheckboxChange={handleCheckboxChange}
          />
          </table>
        <div className='pagination-container'>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(tableData.length / rowsPerPage)}
            onPageChange={onPageChange}
          />
        </div>
        {isFormOpen && <FormClient isOpen={isFormOpen} onClose={toggleForm} />}
        {isFormOpen && <div className="table-overlay"></div>}
      </div>
      {showDeleteConfirmation && (
        <DeleteConfirmation
          item={deleteItem}
          onConfirmDelete={confirmDelete}
          onCancelDelete={cancelDelete}
        />
      )}
    </div>
  );
};

export default Table;
