import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51IEzjsL8nller7xZJqEiJmjrIkOr6VYimOW6Cdueb13o6ijr2osPAeELls8oAUfEwxvKm7EXuBMy7vxYQWf8loBo00hV8GAt4g"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
            
        </Elements>
    )
}
