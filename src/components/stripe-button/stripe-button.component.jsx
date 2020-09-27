import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HVrVWAp1HigOy8jniYwAZaAK313wL7t48MGLiQ3w5xFiMe5i3UG4mVsvAiUbJ8CbpTe9ueAZfRGXOaS6HGQl4qz00inSzRaGs";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="pay now"
      name="crwn clothing ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
