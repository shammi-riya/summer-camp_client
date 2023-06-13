import { Navigate, useLocation } from "react-router";

import UseAdmin from "../Hook/UseAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";


const AdminRoute = ({children}) => {
    const { users, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = UseAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (users && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};



export default AdminRoute;