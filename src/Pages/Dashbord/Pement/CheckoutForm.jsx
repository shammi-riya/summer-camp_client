import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardErr,setCardErr] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault();
       

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setCardErr(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardErr("")
          }
        };


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
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
        
        {cardErr && <p className="text-red-600 ml-8">{cardErr}</p>}
      </form>
    );
  };
  
    


export default CheckoutForm;