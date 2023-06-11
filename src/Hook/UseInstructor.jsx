import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseInstructor = () => {
    const {users, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    
    const {data: isInstractor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstractor', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instractor/${users?.email}`);
            console.log(res.data.instractor);
             return res.data.instractor;
        }
    })
    return [isInstractor, isInstructorLoading]
};

export default UseInstructor;