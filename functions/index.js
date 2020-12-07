const functions = require('firebase-functions');

const express = require("express");

const cors =require("cors");
const stripe = require("stripe")('sk_test_51HvM1dIRf2WKFUM4UYfZ63FRio7pRWLbqbSivdEjv8OLWQuJfoICPj4u113lZjdE0bFlUVZQvYWaFvLDHXEMg3hT00NYnwuplp')


const app = express();

app.use(cors({origin:true}));
app.use(express.json());


app.get('/',(request,response) =>  response.status(200).send('Hii'))
app.get('/payments/create',async(request,response)=>{const total =request.query.total;
    console.log('Payment Request Recieved for',total)

    const paymentIntent =await stripe.paymentIntents.create({

        amount :total,
        currency :"INR",

    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,  
    });
})


exports.api =functions.https.onRequest(app)