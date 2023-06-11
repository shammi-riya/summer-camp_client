import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseAdmin = () => {
    const {users, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${users?.email}`);
            console.log(res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default UseAdmin;