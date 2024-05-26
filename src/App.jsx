import CartItem from "./Component/CartItem";
import Cart from "./Component/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <CartItem itemName="MacBook" price={50000} />
      <CartItem itemName="Mobile" price={35000} />
      <CartItem itemName="Micro SD Card" price={5000} />
      <Cart />
    </div>
  );
}

export default App;
