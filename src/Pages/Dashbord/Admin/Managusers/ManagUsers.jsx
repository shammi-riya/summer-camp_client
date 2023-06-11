import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";


const ManagUsers = () => {


    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })



    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }
    const handleMakeInstractor = (user) => {
        fetch(`http://localhost:5000/users/instractor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instractor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }


    return (
        <div>


            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image </th>
                                <th>Name</th>
                                <th>email</th>
                                <th>admin</th>
                                <th>Instructor</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, i) => <>
                                    <tr key={user._id}>
                                        <th> {i + 1} </th>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </td>
                                        <td> {user.name} </td>
                                        <td>{user.email}</td>

                                        <td>{user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs">make Admin</button>
                                        }</td>
                                        <td>{user.role === 'instractor' ? 'instractor' :
                                            <button onClick={() => handleMakeInstractor(user)} className="btn btn-ghost btn-xs">make Instructor</button>
                                        }</td>
                                        
                                    </tr>
                                </>)
                            }


                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagUsers;