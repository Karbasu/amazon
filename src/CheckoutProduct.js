import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider.js";
function CheckoutProduct({ id, image, title, price, rating, HideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const removeFromBasket = () => {
    // removing the item from cart
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!HideButton && (
          <button onClick={removeFromBasket}>Remove from the basket</button>
        )}
      </div>
    </div>
  );
}
export default CheckoutProduct;
