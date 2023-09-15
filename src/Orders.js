import React, { useState, useEffect } from "react";
import { db } from "./firebase.js";
import { useStateValue } from "./StateProvider.js";
import Order from "./Order.js";
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user)
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    else setOrders([]);
  }, [user]);
  return (
    <div className="orders">
      <h1>your orders </h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}
export default Orders;
