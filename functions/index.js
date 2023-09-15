const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51NoVsHSC9SccTq1nxbH98SUiob"+
"32HsLd3tjyEp4DrvPlFSE5CPbJkJUk16xkGen3kpuXwLgbBLO08eMDaR7oOLHA00DKrb8nlw");
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("Hellow world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
