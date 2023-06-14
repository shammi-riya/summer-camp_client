import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import UseInstractor from "../Hook/UseInstractor";


const Instractorroute = ({children}) => {
    const { users, loading } = useContext(AuthContext)
    const [isInstractor, isInstractorLoading] = UseInstractor()
    const location = useLocation();

    if(loading || isInstractorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (users && isInstractor) {
        return children;
    }
    return <Navigate to="/sighinIn" state={{from: location}} replace></Navigate>
}

export default Instractorroute;