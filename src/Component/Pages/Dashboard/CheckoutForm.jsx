import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!stripe || ! elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
        console.log(card)

    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-success btn-xs mt-4" type="submit" disabled={!stripe}>Pay</button>
      </form>
    );
};

export default CheckoutForm;