import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
const PUBLIC_KEY = "pk_test_51MgtDEJ4NXbujMGwuWRGG2BaNl4zwSKB33ua67S20eNqoVlfulXEXEjBn6VGyWFL3Azrz6s2KH2JK4i1NGcKFntl00W2sRBmuf"
const stripTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
    return (
        <Elements stripe={stripTestPromise}>
            <PaymentForm />
        </Elements>
    );
};

export default StripeContainer;
