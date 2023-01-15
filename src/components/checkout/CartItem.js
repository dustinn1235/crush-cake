import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const CartItem = ({ item, curStep }) => {
  const { cart, setCart } = useContext(UserContext);
  const quantity = cart.get(item);
  const isOne = quantity === 1;
  const hidden = curStep !== 0 ? true : false;
  const style = { opacity: "0" };

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
          disabled={isOne || hidden}
          onClick={() => changeItem("decrease")}
          style={hidden ? style : {}}
        >
          -
        </button>
        <p className="input">{quantity}</p>
        <button
          className="button-61"
          onClick={() => changeItem("increase")}
          disabled={hidden}
          style={hidden ? style : {}}
        >
          +
        </button>
      </div>
      <span className="price">${(quantity * item.price).toFixed(2)}</span>
      <Button
        id="removeBtn"
        onClick={removeItem}
        disabled={hidden}
        style={hidden ? style : {}}
      >
        &#10005;
      </Button>
    </div>
  );
};

export default CartItem;
