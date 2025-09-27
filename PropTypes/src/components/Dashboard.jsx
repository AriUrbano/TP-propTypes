import React, { useState } from 'react';
import OrderList from './OrderList';
import OrderFilter from './OrderFilter';
import OrderStats from './OrderStats';
import OrderForm from './OrderForm';
import './Dashboard.css';

const Dashboard = ({ orders: initialOrders }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState('all');

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  const stats = {
    total: orders.length,
    pending: orders.filter(order => order.status === 'pending').length,
    shipped: orders.filter(order => order.status === 'shipped').length,
    delivered: orders.filter(order => order.status === 'delivered').length
  };

  const handleAddOrder = (newOrder) => {
    setOrders(prev => [newOrder, ...prev]);
  };

  return (
    <div className="dashboard">
      <h1>Sistema de Gestión de Pedidos</h1>
      
      <OrderForm onAddOrder={handleAddOrder} />
      
      <OrderStats 
        total={stats.total}
        pending={stats.pending}
        shipped={stats.shipped}
        delivered={stats.delivered}
      />
      
      <OrderFilter filter={filter} onFilterChange={setFilter} />
      
      <OrderList orders={filteredOrders} />
    </div>
  );
};

export default Dashboard;