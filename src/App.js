import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './App.css';

const App = () => {
  const [jsonData, setJsonData] = useState([]);

  const handleFileUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const parsedData = JSON.parse(e.target.result);
          setJsonData(parsedData);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleRowUpdate = (newData, oldData) => {
    const newDataArray = [...jsonData];
    const sheetName = Object.keys(newDataArray[oldData.index])[0];
    const rows = newDataArray[oldData.index][sheetName];
    rows[oldData.indexInSheet] = newData;
    setJsonData(newDataArray);
  };

  const handleRowAdd = (newData) => {
    const newDataArray = [...jsonData];
    const sheetName = Object.keys(newDataArray[0])[0]; // Assuming all sheets have the same structure
    const newSheet = newDataArray[0][sheetName].concat(newData);
    newDataArray[0][sheetName] = newSheet;
    setJsonData(newDataArray);
  };

  return (
    <div className="app">
      <div className="upload-container">
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
        />
      </div>
      
      {jsonData.fileName && <p className="file-name">Uploaded File: {jsonData.fileName}</p>}

      {jsonData.map((sheet, index) => {
        const sheetName = Object.keys(sheet)[0];
        const rows = sheet[sheetName];
        const columns = rows.length > 0 ? Object.keys(rows[0]) : [];
        
        return (
          <div key={index}>
            <h2>{sheetName}</h2>
            <DataTable
              columns={columns.map(column => ({
                name: column,
                selector: column,
                sortable: true,
                editable: true,
              }))}
              data={rows}
              onRowUpdate={handleRowUpdate}
              onRowAdd={handleRowAdd}
              selectableRows
              pagination
              highlightOnHover
              dense
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
