const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NoVsHSC9SccTq1nxbH98SUiob32HsLd3tjyEp4DrvPlFSE5CPbJkJUk16xkGen3kpuXwLgbBLO08eMDaR7oOLHA00DKrb8nlw"
);
//API
//App config
const app = express();
//middlewear
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
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

//Listen command
exports.api = functions.https.onRequest(app);
