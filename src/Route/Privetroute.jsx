


import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/Authprovider";



const Privetroute = ({children}) => {
  
    const { users, loading } = useContext(AuthContext);
    const location = useLocation();
   
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (users) {
        return children;
    }
    return <Navigate to="/sighinIn" state={{from: location}} replace></Navigate>
};

export default Privetroute;