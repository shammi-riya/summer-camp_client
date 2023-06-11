import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const UseSelectClass = () => {
    const { users,loading } = useContext(AuthContext);

    
    // const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selectClass = [] } = useQuery({
        queryKey: ['selectClass', users?.email],
        enabled:!loading,
      queryFn: async () => {
            const res = await axiosSecure(`/selectClass?email=${users.email}`
            )
            return res.data;
        },
    })

    return [selectClass, refetch]
}

export default UseSelectClass;



