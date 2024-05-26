import { useContext } from "react"
import { CartContext } from "./index"

export const useCart = () => {
  const cart = useContext(CartContext)

  const { items, setItems } = cart;

  return { items, setItems }
};