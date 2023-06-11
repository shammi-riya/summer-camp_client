import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Pement = () => {
    
    return (
        <div className="w-2/3 mx-auto my-10">
            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
          
        </div>
    );
};

export default Pement;