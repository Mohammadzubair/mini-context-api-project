import { useState } from "react";
import { PropTypes } from "prop-types";
import { CartContext } from "./index";

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const initialValues = {
    name: "Cart",
    items,
    setItems,
  };

  return (
    <CartContext.Provider value={initialValues}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
