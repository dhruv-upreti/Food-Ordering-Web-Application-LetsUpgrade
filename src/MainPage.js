import React from "react";
import Sections from "./components/Sections/Sections";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import TheNav from "./components/Header/TheNav";
import TheFooter from "./components/Footer/TheFooter";

const MainPage = ({ onShowCartHandler, onCloseCartHandler, onOrderHandler }) => {
  const cartIsShown = false; // Set the initial value of cartIsShown as desired

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav onShowCart={onShowCartHandler} />
      <Sections />
      <TheFooter />
    </CartProvider>
  );
};

export default MainPage;
