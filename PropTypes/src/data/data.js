export const initialOrders = [
  {
    id: 1,
    customer: "Leandro Cohen",
    date: new Date('2025-08-15'),
    status: "delivered",
    items: [
      { productId: 101, name: "Laptop Gamer", quantity: 1, price: 1200 },
      { productId: 102, name: "Mouse Inalámbrico", quantity: 2, price: 25 }
    ]
  },
  {
    id: 2,
    customer: "Jhoan Romañana",
    date: new Date('2025-09-16'),
    status: "shipped",
    items: [
      { productId: 103, name: "Teclado Mecánico", quantity: 1, price: 80 },
      { productId: 104, name: "Auriculares", quantity: 1, price: 150 }
    ]
  },
  {
    id: 3,
    customer: "Pilar de las Cuevas",
    date: new Date('2025-02-02'),
    status: "pending",
    items: [
      { productId: 105, name: "Monitor 24\"", quantity: 1, price: 300 }
    ]
  }
];