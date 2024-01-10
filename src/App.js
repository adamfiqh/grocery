// src/App.js
import React from "react";
import { AppProvider } from "./AppContext";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Cart from "./Cart";
import Category from "./Category";
import UserProfile from "./UserProfile";

const App = () => {
  // Define your categories
  const yourCategoriesArray = ["Electronics", "Clothing", "Books", "Toys"];

  return (
    <AppProvider>
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Toko Online
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">Beranda</a>
              </li>
              <li>
                <a href="#">Produk</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <Category categories={yourCategoriesArray} />
            </div>
            <div className="col s12 m4">
              <Cart />
            </div>
            <div className="col s12 m4">
              <UserProfile />
            </div>
          </div>
        </div>
        <footer>© 2024 Toko Online. All rights reserved.</footer>
      </div>
    </AppProvider>
  );
};

export default App;
