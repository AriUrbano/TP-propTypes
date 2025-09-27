import React from 'react';
import PropTypes from 'prop-types';
import './OrderFilter.css';

const OrderFilter = ({ filter, onFilterChange }) => {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="order-filter">
      <label htmlFor="status-filter">Filtrar por estado:</label>
      <select 
        id="status-filter" 
        value={filter} 
        onChange={handleFilterChange}
      >
        <option value="all">Todos</option>
        <option value="pending">Pendientes</option>
        <option value="shipped">Enviados</option>
        <option value="delivered">Entregados</option>
      </select>
    </div>
  );
};

OrderFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'pending', 'shipped', 'delivered']),
  onFilterChange: PropTypes.func.isRequired
};

OrderFilter.defaultProps = {
  filter: 'all'
};

export default OrderFilter;