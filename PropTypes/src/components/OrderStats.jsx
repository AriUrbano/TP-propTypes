import React from 'react';
import PropTypes from 'prop-types';
import './OrderStats.css';

const OrderStats = ({ total, pending, shipped, delivered }) => {
  return (
    <div className="order-stats">
      <h2>Estadísticas de Pedidos</h2>
      <div className="stats-grid">
        <div className="stat-card total">
          <h3>Total</h3>
          <span className="stat-number">{total}</span>
        </div>
        <div className="stat-card pending">
          <h3>Pendientes</h3>
          <span className="stat-number">{pending}</span>
        </div>
        <div className="stat-card shipped">
          <h3>Enviados</h3>
          <span className="stat-number">{shipped}</span>
        </div>
        <div className="stat-card delivered">
          <h3>Entregados</h3>
          <span className="stat-number">{delivered}</span>
        </div>
      </div>
    </div>
  );
};

OrderStats.propTypes = {
  total: PropTypes.number.isRequired,
  pending: PropTypes.number.isRequired,
  shipped: PropTypes.number.isRequired,
  delivered: PropTypes.number.isRequired
};

export default OrderStats;