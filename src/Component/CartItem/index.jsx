import { PropTypes } from "prop-types";
import { useCart } from "../../context/Cart/hook";

const CartItem = ({ itemName, price }) => {
  const { items, setItems } = useCart();

  const addCartHandler = () => {
    setItems([...items, { name: itemName, price: price }]);
  };

  return (
    <div>
      <h2>CartItem</h2>
      <p>{itemName}</p>
      <p>${price}</p>
      <button onClick={addCartHandler}>Add to Cart</button>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  itemName: PropTypes.string,
  price: PropTypes.number,
};
