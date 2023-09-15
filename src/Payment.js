import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct.js";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer.js";
import { db } from "./firebase.js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const formatPrice = getBasketTotal(basket).toLocaleString();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState();
  const history = useHistory();
  useEffect(() => {
    //generate the special stripe secrete which allows us to change a customer
    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    getClientSecret();
  }, [basket]);
  const handlesSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment conformation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };
  const handlesChange = (e) => {
    // listen the changes in while customer typing and display error if customer type some thing wrong , other than card details
    setDisabled(e.emptyt);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          checkout <Link to="/checkout">({basket?.length} items)</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Deliveery Adress</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>RBDGDTC Boys Hostel</p>
            <p>Mejestic, Banglore 560023</p>
          </div>
        </div>
        {/* item review */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review item and Deliveery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment methode */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Methode</h3>
          </div>
          <div className="payment_details">
            {/* payment methode */}
            <form onSubmit={handlesSubmit}>
              <CardElement onChange={handlesChange} />
              <div className="payment_priceContainer">
                <h3>Order Total: ₹ {formatPrice}</h3>
              </div>
              <button
                className="buynow_button"
                disabled={disabled || processing || succeeded}
              >
                <span>{processing ? <p>Processing</p> : "Buy now"}</span>
              </button>
            </form>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
