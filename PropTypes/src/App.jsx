import React from 'react';
import Dashboard from './components/Dashboard';
import { initialOrders } from './data/data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard orders={initialOrders} />
    </div>
  );
}

export default App;