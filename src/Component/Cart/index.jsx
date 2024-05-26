import { useCart } from "../../context/Cart/hook";

const Cart = () => {
  const { items } = useCart();

  const total = items.reduce(
    (previousValue, currentValue) => {
      return previousValue + currentValue.price;
    },
    0 // initialValue
  );

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items &&
          items.map((item, id) => (
            <li key={id}>
              {item.name} - {item.price}
            </li>
          ))}
      </ul>
      <h2>Total Bill: ${total}</h2>
    </div>
  );
};

export default Cart;
