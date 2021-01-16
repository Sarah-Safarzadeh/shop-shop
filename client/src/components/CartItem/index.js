import React from "react";
// importing global state hook
import { useStoreContext } from "../../utils/GlobalState";
// importing actions
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

const CartItem = ({ item }) => {
  // global state
  const [, dispatch] = useStoreContext();

  // remove from cart function
  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input type="number" placeholder="1" value={item.purchaseQuantity} />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
