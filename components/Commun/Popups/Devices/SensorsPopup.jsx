import React, { useState } from 'react';

const SensorsPopup = ({ closePopup }) => {
  const [sensors, setSensors] = useState([
    { 
      name: 'Temperature Sensor', 
      reference: 'TS-001', 
      export: false, 
      startDate: '', 
      endDate: '', 
      frequency: ''
    },
    { 
      name: 'Pressure Sensor', 
      reference: 'PS-002', 
      export: false, 
      startDate: '', 
      endDate: '', 
      frequency: ''
    },
    { 
      name: 'Motion Detector', 
      reference: 'MD-003', 
      export: false, 
      startDate: '', 
      endDate: '', 
      frequency: ''
    }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    setSensors(prevState => {
      const updatedSensors = [...prevState];
      updatedSensors[index] = { ...updatedSensors[index], [name]: value || checked };
      return updatedSensors;
    });
  };

  const handleSave = () => {
    console.log('Saving sensors:', sensors);
    closePopup(); 
  };

  const handleExport = (sensor) => {
    console.log(`Exporting data for ${sensor.name} from ${sensor.startDate} to ${sensor.endDate} with frequency ${sensor.frequency}`);
  };

  return (
    <div className="sensors-popup-overlay">
      <div className="sensors-popup">
        {sensors.map((sensor, index) => (
          <div key={index} className="sensors-popup-input-container">
            <input
              type="text"
              name="name"
              placeholder="Sensor Name"
              value={sensor.name}
              readOnly
            />
            <input
              type="text"
              name="reference"
              placeholder="Reference"
              value={sensor.reference}
              readOnly
            />
            <label>
              Export:
              <input
                type="checkbox"
                name="export"
                checked={sensor.export}
                onChange={e => handleInputChange(index, e)}
              />
            </label>
            {sensor.export && (
              <div className="export-options">
                <label>
                  Start Date:
                  <div className="custom-date-input">
                    <input
                      type="date"
                      name="startDate"
                      value={sensor.startDate}
                      onChange={e => handleInputChange(index, e)}
                    />
                  </div>
                </label>
                <label>
                  End Date:
                  <div className="custom-date-input">
                    <input
                      type="date"
                      name="endDate"
                      value={sensor.endDate}
                      onChange={e => handleInputChange(index, e)}
                    />
                  </div>
                </label>
                <label>
                  Frequency:
                  <select
                    name="frequency"
                    value={sensor.frequency}
                    onChange={e => handleInputChange(index, e)}
                  >
                    <option value="">Select Frequency</option>
                    <option value="seconds">Every few seconds</option>
                    <option value="hours">Every 8 hours</option>
                  </select>
                </label>
                <button onClick={() => handleExport(sensor)}>Export</button>
              </div>
            )}
          </div>
        ))}
        <div className='center1'>
          <button className="add-button" onClick={handleSave}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SensorsPopup;
