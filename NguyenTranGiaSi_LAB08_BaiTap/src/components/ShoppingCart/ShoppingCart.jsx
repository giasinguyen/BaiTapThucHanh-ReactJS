import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { cartStore } from './store';
import { addItem, removeItem, updateQuantity } from './cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 999, image: '💻' },
  { id: 2, name: 'Smartphone', price: 699, image: '📱' },
  { id: 3, name: 'Headphones', price: 199, image: '🎧' },
  { id: 4, name: 'Mouse', price: 29, image: '🖱️' },
];

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Available Products</h3>
        <div className="grid grid-cols-2 gap-3">
          {products.map(product => (
            <div key={product.id} className="border rounded p-3 flex items-center justify-between">
              <div>
                <span className="text-2xl mr-2">{product.image}</span>
                <span className="font-medium">{product.name}</span>
                <p className="text-green-600">${product.price}</p>
              </div>
              <button 
                onClick={() => handleAddItem(product)} 
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-2">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{item.image}</span>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-green-600">${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="bg-gray-200 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3 bg-gray-100">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-3 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <div className="flex justify-between">
                <p className="font-medium">Total Items:</p>
                <p className="font-bold">{totalItems}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="font-medium">Total Price:</p>
                <p className="font-bold text-green-600">${totalPrice}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ShoppingCart = () => (
  <Provider store={cartStore}>
    <Cart />
  </Provider>
);

export default ShoppingCart;