import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import UseSelectClass from "../../../Hook/UseSelectClass";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Pement = () => {
    const [selectClass] = UseSelectClass()
    // selectClass.map(clas=>console.log(clas))
    const location = useLocation();
//    console.log(location);
     const{classId,name,price,_id} = location.state;
    //  console.log(classId,name);
  
    
    return (
        <div className="w-2/3 mx-auto my-10">
            <Elements stripe={stripePromise}>
            <CheckoutForm 
            classInfo={{classId,name,price}}
             selectClass={selectClass}></CheckoutForm>
            </Elements>
          
        </div>
    );
};

export default Pement;