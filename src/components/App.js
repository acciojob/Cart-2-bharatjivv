<<<<<<< HEAD
import React from 'react';
import Navbar from "./Navbar";
import CartList from "./CartList";
import { CartProvider } from '../context/CartContext';
=======
>>>>>>> 9ffa55ce7d413ec5d5f87b6e20c906d27b963544

const App = () => {
  return (
    <CartProvider>
      <main id="main">
        <Navbar />
        <CartList />
      </main>
    </CartProvider>
  );
};
export default App;
