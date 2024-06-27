import React, { useState, useEffect, useRef } from 'react';
import TabC from './TabC';

const ReclamationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientId: '',
    subject: '',
    description: '',
    priority: 'Low',
    category: 'Hardware',
    attachments: null,
    status: 'New',
  });

  const [filter, setFilter] = useState('Total');
  const [lineStyle, setLineStyle] = useState({});
  const filterRef = useRef(null);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    if (filterRef.current) {
      const activeButton = filterRef.current.querySelector('.active-filter');
      if (activeButton) {
        const { offsetLeft, offsetWidth } = activeButton;
        setLineStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    }
  }, [filter]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 className=" nunito mt70 fw600 pl-4 mb-5 sidebargrey f20 title text-white">Complaints</h1>

      <div className=" nunito  filter-section" ref={filterRef}>
        <button
          className={filter === 'Total' ? 'active-filter' : 'filter'}
          onClick={() => handleFilterChange('Total')}
        >
        <span className='f14 '>Total Complaints</span> <span className='f12'> (225)</span>
        </button>
        <button
          className={filter === 'Resolved' ? 'active-filter' : 'filter'}
          onClick={() => handleFilterChange('Resolved')}
        >
         <span className='f14'>Resolved</span> <span className='f12'>(150)</span>
        </button>
        <button
          className={filter === 'Un-Resolved' ? 'active-filter' : 'filter'}
          onClick={() => handleFilterChange('Un-Resolved')}
        >
         <span className='f14'>Un-Resolved</span> <span className='f12'>(75)</span>
        </button>
        <button
          className={filter === 'Serious' ? 'active-filter' : 'filter'}
          onClick={() => handleFilterChange('Serious')}
        >
        <span className='f14'>Serious</span> <span className='f12'>(46)</span>        </button>
        <button
          className={filter === 'Frivolous' ? 'active-filter' : 'filter'}
          onClick={() => handleFilterChange('Frivolous')}
        >
         <span className='f14'>Frivolous</span> <span className='f12'>(36)</span>
        </button>
        <div className="line" style={lineStyle}></div>
      </div>

      <div className=" nunito ">
        <TabC/>
      </div>
    </>
  );
};

export default ReclamationPage;
