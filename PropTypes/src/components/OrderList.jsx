import React from 'react';
import PropTypes from 'prop-types';
import OrderItem from './OrderItem';
import './OrderList.css';

const OrderList = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <div className="order-list empty">
        <p>No hay pedidos para mostrar</p>
      </div>
    );
  }

  return (
    <div className="order-list">
      {orders.map(order => (
        <OrderItem
          key={order.id}
          id={order.id}
          customer={order.customer}
          date={order.date}
          status={order.status}
          items={order.items}
        />
      ))}
    </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customer: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      status: PropTypes.oneOf(['pending', 'shipped', 'delivered']).isRequired,
      items: PropTypes.array.isRequired
    })
  ).isRequired
};

export default OrderList;