import React from "react";
import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.js";
import { getBasketTotal } from "./reducer.js";
import { useHistory } from 'react-router-dom';

function Subtotal() { 
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  console.log(dispatch);
  const formatPrice = getBasketTotal(basket).toLocaleString();
  return (
    <div className="subtotal">
          <p>
            Subtotal ({basket?.length} items):
            <strong>₹ {formatPrice}</strong>
          </p>
          <small className="subtotal_gift">
            <input type="checkbox" />
            This order contains a gift
          </small>
      <button onClick={e => history.push('./payment') }>Proceed to checkout</button>
    </div>
  );
}
export default Subtotal;
