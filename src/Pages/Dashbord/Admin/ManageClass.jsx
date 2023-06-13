
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClass = () => {


    const [deniedClasses, setDeniedClasses] = useState([])
    const [appruveClasses, setappruveClasses] = useState([])


    // const [allClass] = UseAllClass()
    const [axiosSecure] = useAxiosSecure();
    const { data: allClass = [], refetch } = useQuery(['allClass'], async () => {
        const res = await axiosSecure.get("/allClass")
        return res.data;
    })



    const [isOpen, setIsOpen] = useState(false);
    const [feedback, setfeedback] = useState('');
    const [feedbackId, setFeedbackId] = useState(null)

    const openModal = (id) => {
        setFeedbackId(id);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleInputChange = (event) => {
        setfeedback(event.target.value);

    };

    const handleSubmit = () => {
        fetch(`http://localhost:5000/allClass/${feedbackId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ feedback })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `feedback success`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        closeModal()
    };

    
    const handleAppruve = (clases) => {

        fetch(`http://localhost:5000/allClass/Approve/${clases._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setappruveClasses((prevappruveClasse) => [...prevappruveClasse, clases._id])
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



    const handleDenny = (clases) => {
        fetch(`http://localhost:5000/allClass/danny/${clases._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    setDeniedClasses((prevDeniedClasses) => [...prevDeniedClasses, clases._id]);
                    refetch()

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'danny sucess!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }



            })

    }

    // const handleFeedback = async (id) => {
    //     try {
    //         const response = await fetch(`/class/${id}`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ feedback }),
    //         });

    //         if (response.ok) {
    //             // Feedback updated successfully
    //             // You can perform any necessary actions here (e.g., show a success message)
    //         } else {
    //             // Failed to update feedback
    //             // You can handle the error here (e.g., show an error message)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };




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
                            <th>Feedback</th>

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
                                    <td>${clases?.price}</td>
                                    <td>{clases.stutus}</td>
                                    <td><button
                                        disabled={appruveClasses.includes(clases._id)} // Disable button if isApproved is true
                                        onClick={() => handleAppruve(clases)}
                                        className={`btn btn-sm bg-[#07332F] text-white`}
                                    >
                                        Approve
                                    </button></td>
                                    <td><button
                                        disabled={deniedClasses.includes(clases._id)}
                                        onClick={() => handleDenny(clases)}
                                        className='btn btn-sm bg-slate-700 text-white'
                                    >
                                        Deny
                                    </button></td>


                                    <td><button onClick={() => openModal(clases._id)}
                                        className="btn btn-sm bg-red-400 text-white">Feedback</button></td>






                                </tr>
                            </>)
                        }


                    </tbody>



                </table>

                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white w-1/3 h-40 rounded shadow-lg relative py-4 px-9">
                            <h3 className="my-3 text-xl">Give Me Feedback</h3>
                            <input
                                type="text"
                                placeholder="Type here"
                                value={feedback}
                                onChange={handleInputChange}
                                className="input input-bordered input-info w-full max-w-xs"
                            />
                            <button
                                className="bg-blue-500 absolute top-0 right-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleSubmit}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageClass;