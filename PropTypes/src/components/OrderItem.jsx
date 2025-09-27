import React from 'react';
import PropTypes from 'prop-types';
import './OrderItem.css';

const OrderItem = ({ id, customer, date, status, items }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES');
  };

  const getStatusClass = (status) => {
    return `order-status ${status}`;
  };

  const getStatusText = (status) => {
    const statusMap = {
      pending: 'Pendiente',
      shipped: 'Enviado',
      delivered: 'Entregado'
    };
    return statusMap[status] || status;
  };

  const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <div className="order-item">
      <div className="order-header">
        <h3>Pedido #{id}</h3>
        <span className={getStatusClass(status)}>{getStatusText(status)}</span>
      </div>
      <div className="order-info">
        <p><strong>Cliente:</strong> {customer}</p>
        <p><strong>Fecha:</strong> {formatDate(date)}</p>
      </div>
      <div className="order-products">
        <h4>Productos:</h4>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="order-total">
        <strong>Total: ${total}</strong>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  customer: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.oneOf(['pending', 'shipped', 'delivered']).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

OrderItem.defaultProps = {
  status: 'pending',
  date: new Date()
};

export default OrderItem;