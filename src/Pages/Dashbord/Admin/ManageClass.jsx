// import UseAllClass from "../../../Hook/UseAllClass";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const ManageClass = () => {
    // const [allClass] = UseAllClass()
    const [axiosSecure] = useAxiosSecure();
    const { data: allClass = [], refetch } = useQuery(['allClass'], async () => {
        const res = await axiosSecure.get("/allClass")
        return res.data;
    })
   


    const handleAppruve= (clases) => {
        fetch(`http://localhost:5000/allClass/${clases._id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'appurve sucess!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }



const handleDenny =()=>{

}



    return (
        <div>
           
           <h2>Total Class : {allClass.length}</h2>



           <div className="overflow-x-auto">
                    <table className="table">
                        
                        <thead>
                            <tr className="text-md">
                                <th>#</th>
                                <th>Class Image </th>
                                <th>Class Name</th>
                                <th>Instractor email</th>
                                <th>Instractor name</th>
                                <th>Avalable Seats</th>
                                <th>Price</th>
                                <th>Stutus</th>
                                <th>Action</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                allClass.map((clases, i) => <>
                                    <tr key={clases._id}>
                                        <th> {i + 1} </th>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={clases?.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </td>
                                        <td> {clases?.className} </td>
                                        <td>{clases?.instructorEmail}</td>
                                        <td>{clases?.instructorName}</td>
                                        <td>{clases?.availableSeats}</td>
                                        <td>{clases?.price}</td>
                                        <td>{clases.stutus}</td>
                                        <td><button onClick={()=>handleAppruve(clases)}
                                        className="btn btn-sm bg-[#07332F] text-white">Approve</button></td>
                                        <td><button onClick={handleDenny}
                                        className="btn btn-sm bg-red-400 text-white">Danny</button></td>
                                       
                                       

                                     
                                            
                                        
                                    </tr>
                                </>)
                            }


                        </tbody>



                    </table>
                </div>
        </div>
    );
};

export default ManageClass;