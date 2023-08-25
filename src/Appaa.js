import React, { useState } from 'react';
import './App.css';
import config from './config';


function App() {
  const [customerData, setCustomerData] = useState(null);

  const getCustomer = async () => {
    try {
      const response = await fetch(`${config.apiUrl}/get-customer?customerId=123`);
      if (!response.ok) {
        throw new Error(`Failed to fetch customer. Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Customer data:', data);
      setCustomerData(data); // Store the response data in state
    } catch (error) {
      console.error('Error fetching customer:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:'center',color:'blue'}}>{config.appTitle}</h1>
        <div>
          <button onClick={getCustomer}>Get Customer</button>
        </div>
        {customerData && (
          <div>
            <h2>Customer Data:</h2>
            <pre>{JSON.stringify(customerData, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
