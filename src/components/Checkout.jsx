import React, { useState } from "react";
import "../styles/checkout.css"

import StripeContainer from "./StripeContainer";
const Checkout = () => {
    return (
        <div className="my-checkout">
            <StripeContainer />
        </div>
    );
};

export default Checkout;
