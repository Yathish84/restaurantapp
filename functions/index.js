const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe=require('stripe')('sk_test_51I9EcWGIrFaYxRFb1xncEtgaqTPB4RV36L2LKAvSzI6QIfJ5cT47RQyS76ss08XlCKTJEjyHjx0ZGImuelAlDZYG00guqx8TJK')
//API

//API config
const app = express()

//middleware
app.use(cors({origin:true}))
app.use(express.json())
//api routers
app.post('/payments/create',async (request,response)=>{
    const total = request.query.total;
    console.log("payemnt req recieved>>>>>",total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"rs"
    });
    res.status(201).send({
        clientSecret:paymentIntent.clientSecret,
    })
})

//listen cmd
exports.api=functions.https.onRequest(app)
//http://localhost:5001/covid-19-tracker-ba750/us-central1/api