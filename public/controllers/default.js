app.controller('DefaultCtrl', function ($scope, $location) {

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account
var stripe = require("stripe")("sk_test_DPr34ac2HzBS4QKWr3aQen3C");

// (Assuming you're using express - expressjs.com)
// Get the credit card details submitted by the form
var stripeToken = request.body.stripeToken;

var charge = stripe.charges.create({
  amount: 1000, // amount in cents, again
  currency: "usd",
  card: stripeToken,
  description: "payinguser@example.com"
}, function(err, charge) {
  if (err && err.type === 'StripeCardError') {
    // The card has been declined
  }
});

});