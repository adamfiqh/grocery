// src/Cart.js
import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Keranjang Belanja</span>
        <ul className="collection">
          {cartItems.map((item, index) => (
            <li key={index} className="collection-item">
              {item.name} - ${item.price}
              <button
                className="waves-effect waves-light btn-small red right"
                onClick={() => removeFromCart(index)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
