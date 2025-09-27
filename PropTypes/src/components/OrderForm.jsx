import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './OrderForm.css';

const OrderForm = ({ onAddOrder }) => {
  const [formData, setFormData] = useState({
    customer: '',
    status: 'pending',
    items: [{ productId: '', name: '', quantity: 1, price: '' }]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData(prev => ({
      ...prev,
      items: newItems
    }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { productId: '', name: '', quantity: 1, price: '' }]
    }));
  };

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      const newItems = formData.items.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        items: newItems
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (formData.customer.length < 3) {
      alert('El nombre del cliente debe tener al menos 3 caracteres');
      return;
    }

    const newOrder = {
      id: Date.now(),
      customer: formData.customer,
      date: new Date(),
      status: formData.status,
      items: formData.items.map(item => ({
        productId: Number(item.productId),
        name: item.name,
        quantity: Number(item.quantity),
        price: Number(item.price)
      }))
    };

    onAddOrder(newOrder);
    
    // Reset form
    setFormData({
      customer: '',
      status: 'pending',
      items: [{ productId: '', name: '', quantity: 1, price: '' }]
    });
  };

  return (
    <div className="order-form">
      <h2>Nuevo Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customer">Cliente:</label>
          <input
            type="text"
            id="customer"
            name="customer"
            value={formData.customer}
            onChange={handleInputChange}
            required
            minLength="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Estado:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="pending">Pendiente</option>
            <option value="shipped">Enviado</option>
            <option value="delivered">Entregado</option>
          </select>
        </div>

        <div className="form-items">
          <h3>Productos:</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="item-row">
              <input
                type="number"
                placeholder="ID Producto"
                value={item.productId}
                onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Nombre"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Cantidad"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                min="1"
                required
              />
              <input
                type="number"
                placeholder="Precio"
                step="0.01"
                value={item.price}
                onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                required
              />
              <button type="button" onClick={() => removeItem(index)} className="remove-btn">
                ✕
              </button>
            </div>
          ))}
          <button type="button" onClick={addItem} className="add-btn">
            + Agregar Producto
          </button>
        </div>

        <button type="submit" className="submit-btn">Crear Pedido</button>
      </form>
    </div>
  );
};

OrderForm.propTypes = {
  onAddOrder: PropTypes.func.isRequired
};

export default OrderForm;