import React from "react";
import moment from "moment";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct.js";
function Order({ order }) {
  return (
    <div className="order">
      {/* orders */}
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mm")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          HideButton
        />
      ))}
      <h3>Order Total: {order.data.amount / 100} </h3>
    </div>
  );
}
export default Order;
