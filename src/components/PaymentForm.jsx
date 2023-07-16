import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import "../styles/Payment.css"
import 'react-toastify/dist/ReactToastify.css';
import "../styles/login-page.css"
import { toast, ToastContainer } from "react-toastify";
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fff" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#000",
            color: "#000"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 1000,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }
    const notify = () => {
        toast.promise(
            new Promise((resolve, rejected) => {
                setTimeout(() => {
                    resolve()
                }, 2000)
            }),
            {
                pending: "loading",
                success: "success",
                error: "failed"
            }, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }
        )
    }
    return (
        <div className="payment-container">
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button className="btn-pay" onClick={notify}>Pay</button>
                </form>
                :
                <div>
                    <h2>Thank you for you purchase have nice day 😄</h2>
                </div>
            }
            <ToastContainer

            />

        </div>
    )
}