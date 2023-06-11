
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/Authprovider";

import Swal from "sweetalert2";


const AddClass = () => {
    const { users } = useContext(AuthContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {


        fetch("http://localhost:5000/class",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


     
    

    };


    return (
        <div className="w-[65%] mx-auto my-10">
            <h2 className="text-center text-3xl my-4 border-b-2 w-1/3 mx-auto"> Add An Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label className="text-lg " htmlFor="">Class Name:</label>
                    <input className="w-full py-3 my-3 px-3"
                        placeholder="class Name"
                        {...register("className")} />
                </div>


                <div className="grid md:grid-cols-2 gap-3 my-3">
                    <div>
                        <label className="text-lg" htmlFor="">Instructor Email:</label>
                        <input className="w-full py-3 px-3 my-3"
                            value={users?.email}
                            {...register("instructorEmail")} />
                    </div>
                    <div>
                        <label className="text-lg" htmlFor="">Instractor Name:</label>
                        <input className="w-full py-3 px-3 my-3"
                            value={users?.displayName}
                            {...register("instructorName")} />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 my-3">
                    <div>
                        <label className="text-lg" htmlFor="">Avalable Seats:</label>
                        <input className="w-full py-3 px-3 my-2"
                            placeholder="avalble Seats"
                            type="number"
                            {...register("availableSeats", { required: true })} />
                    </div>
                    <div>
                        <label className="text-lg" htmlFor="">Course Fee:</label>
                        <input className="w-full py-3 px-3 my-2"
                            placeholder="Price"
                            type="number"

                            {...register("price", { required: true })} />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 my-2">
                    <div>
                        <label className="text-lg" htmlFor="">Class Img:</label>
                        <input className="w-full py-3 px-3 my-2"
                            placeholder="Image Url"
                            type="url"

                            {...register("img", { required: true })} />
                    </div>
                    <div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Stutus*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("stutus", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>pending</option>

                            </select>
                        </div>
                    </div>
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="bg-[#07332F] w-full py-2 text-lg my-4 rounded text-white" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;