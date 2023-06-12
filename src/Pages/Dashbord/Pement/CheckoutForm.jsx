import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Provider/Authprovider";
import useAxiosSecure from "../../../Hook/useAxiosSecure";



const CheckoutForm = ({ classInfo}) => {
  const {_id,name,price,classId} = classInfo
  
  const stripe = useStripe();
  const elements = useElements();
  const { users } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure()
  const [cardErr, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');



  useEffect(() => {
      if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                 
                  setClientSecret(res.data.clientSecret);
              })
      }
  }, [price, axiosSecure])


  const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
          return
      }

      const card = elements.getElement(CardElement);
      if (card === null) {
          return
      }

      const { error ,paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card
      })

      if (error) {
          console.log('error', error)
          setCardError(error.message);
      }
      else {
          setCardError('');
          console.log('payment method', paymentMethod)
      }

     

      const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
              payment_method: {
                  card: card,
                  billing_details: {
                      email: users?.email || 'unknown',
                      name: users?.displayName || 'anonymous'
                  },
              },
          },
      );

      if (confirmError) {
        console.log(confirmError);
    }

    console.log('payment intent', paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const payment = {
            email: users?.email,
            transactionId: paymentIntent.id,
             price,
            date: new Date(),

             _id,
            classId,
            status: 'service pending',
            className:name
        }
        axiosSecure.post('/payment', payment)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                   alert("pement suceess")
                }
            })
    }


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
        <button className="btn btn-primary mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
        
        {cardErr && <p className="text-red-600 ml-8">{cardErr}</p>}
        {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        
      </form>
    );
  };
  
    


export default CheckoutForm;