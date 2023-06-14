import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UseInstractor = () => {
    const {users, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    
    const {data: isInstractor, isLoading: isInstractorLoading} = useQuery({
        queryKey: ['isInstractor', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instractor/${users?.email}`);
           
            return res.data.admin;
        }
    })
    return [isInstractor, isInstractorLoading]
}


export default UseInstractor;