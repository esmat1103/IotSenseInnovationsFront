import React, { useState } from 'react';
import TableHeaderS from '@components/Admin/SensorsContent/TabHeaderS';
import TableBodyS from '@components/Admin/SensorsContent/TabBodyS';
import AddButton from '@components/Commun/Buttons/AddButton';
import deleteW from '@public/assets/Table/deleteW.svg';
import Pagination from '@components/Commun/Pagination';
import DropdownFilter from '../../commun/fliter';
import SearchBar from '@components/Admin/ClientContent/search';
import FormSensor from '@components/Commun/Popups/Sensors/form';
import DeleteAllButton from '@components/Commun/Buttons/DeleteAllButton';
import DeleteConfirmation from '@components/Commun/Popups/DeleteAllConfirmation';

const TableS = () => {
  const handleAddButtonClick = () => {
    // Handle button click logic here
    console.log('Add button clicked');
  };

  const [tableData, setTableData] = useState([
    { id: '#FRTL',ref: 19, sensorName: "pulse1", unit: "Litres", rangeMin: 0, rangeMax: 999999.99, thresholdMin: 9000, thresholdMax: 999999.99, startIndex: 250, pulse: "Yes", action: "" },
    {id: '#FLRG', ref: 25, sensorName: "TEST", unit: "mg/L", rangeMin: 4, rangeMax: 20, thresholdMin: 4, thresholdMax: 20, startIndex: 0, pulse: "No", action: "" },
    { id: '#PMLL',ref: 26, sensorName: "test22", unit: "mg/L", rangeMin: 4, rangeMax: 56, thresholdMin: 5, thresholdMax: 20, startIndex: 0, pulse: "No", action: "" },
    { id: '#ABCD', ref: 27, sensorName: "Water Level", unit: "cm", rangeMin: 0, rangeMax: 100, thresholdMin: 10, thresholdMax: 90, startIndex: 50, pulse: "Yes", action: "" },
    { id: '#WXYZ', ref: 28, sensorName: "Temperature", unit: "°C", rangeMin: -10, rangeMax: 50, thresholdMin: 0, thresholdMax: 40, startIndex: 20, pulse: "No", action: "" },
    { id: '#QRST', ref: 29, sensorName: "Humidity", unit: "%", rangeMin: 0, rangeMax: 100, thresholdMin: 30, thresholdMax: 70, startIndex: 40, pulse: "Yes", action: "" },
    { id: '#ABCD', ref: 27, sensorName: "Water Level", unit: "cm", rangeMin: 0, rangeMax: 100, thresholdMin: 10, thresholdMax: 90, startIndex: 50, pulse: "Yes", action: "" },
    { id: '#WXYZ', ref: 28, sensorName: "Temperature", unit: "°C", rangeMin: -10, rangeMax: 50, thresholdMin: 0, thresholdMax: 40, startIndex: 20, pulse: "No", action: "" },
    { id: '#QRST', ref: 29, sensorName: "Humidity", unit: "%", rangeMin: 0, rangeMax: 100, thresholdMin: 30, thresholdMax: 70, startIndex: 40, pulse: "Yes", action: "" },
    { id: '#UVWX', ref: 30, sensorName: "Pressure", unit: "Pa", rangeMin: 800, rangeMax: 1200, thresholdMin: 900, thresholdMax: 1100, startIndex: 1000, pulse: "No", action: "" },
    { id: '#EFGH', ref: 31, sensorName: "Light Intensity", unit: "lux", rangeMin: 0, rangeMax: 1000, thresholdMin: 200, thresholdMax: 800, startIndex: 400, pulse: "Yes", action: "" },
    { id: '#IJKL', ref: 32, sensorName: "Sound Level", unit: "dB", rangeMin: 30, rangeMax: 120, thresholdMin: 50, thresholdMax: 100, startIndex: 70, pulse: "No", action: "" },
    { id: '#MNOP', ref: 33, sensorName: "CO2 Concentration", unit: "ppm", rangeMin: 0, rangeMax: 5000, thresholdMin: 1000, thresholdMax: 4000, startIndex: 2000, pulse: "Yes", action: "" },
    { id: '#QRST', ref: 34, sensorName: "Motion Detection", unit: "%", rangeMin: 0, rangeMax: 1, thresholdMin: 0, thresholdMax: 1, startIndex: 1, pulse: "No", action: "" },
    { id: '#UVWX', ref: 35, sensorName: "pH Level", unit: "%", rangeMin: 0, rangeMax: 14, thresholdMin: 6, thresholdMax: 8, startIndex: 7, pulse: "Yes", action: "" },
    { id: '#EFGH', ref: 36, sensorName: "Vibration", unit: "Hz", rangeMin: 0, rangeMax: 100, thresholdMin: 20, thresholdMax: 80, startIndex: 40, pulse: "No", action: "" },
    { id: '#IJKL', ref: 37, sensorName: "Gas Leakage", unit: "litres", rangeMin: 0, rangeMax: 1, thresholdMin: 0, thresholdMax: 1, startIndex: 0, pulse: "Yes", action: "" }

  


  ]);
  
  
  const [selectedRows, setSelectedRows] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 11;
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
     <AddButton text="Add Sensor" onClick={toggleForm} />
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
      <div className=''>
        <DropdownFilter options={filterOptions} onChange={(option) => console.log('Selected option:', option)} />
      </div>
    </div>
    <table className="table-auto">
      <TableHeaderS handleHeaderCheckboxChange={handleHeaderCheckboxChange} />
      <TableBodyS
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
        {isFormOpen && <FormSensor isOpen={isFormOpen} onClose={toggleForm} />}
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

export default TableS;
