import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(UserContext);
  const quantity = cart.get(item);
  const isOne = quantity === 1;

  const changeItem = (action) => {
    const offset = action === "increase" ? 1 : -1;
    cart.set(item, quantity + offset);
    setCart(new Map(cart));
  };

  const removeItem = () => {
    cart.delete(item);
    setCart(new Map(cart));
  };

  return (
    <div className="cart-item">
      <div className="image-container">
        <img alt="product-img" src={item.img}></img>
      </div>
      <div className="product-detail-container">
        <h3>{item.name}</h3>
        <p>
          - Caramel filling brownie<br></br>- sad<br></br>- sad
        </p>
      </div>
      <div className="button-container">
        <button
          className="button-61"
          disabled={isOne}
          onClick={() => changeItem("decrease")}
        >
          -
        </button>
        <p className="input">{quantity}</p>
        <button className="button-61" onClick={() => changeItem("increase")}>
          +
        </button>
      </div>
      <span className="price">${(quantity * item.price).toFixed(2)}</span>
      <Button id="removeBtn" onClick={removeItem}>
        &#10005;
      </Button>
    </div>
  );
};

export default CartItem;
