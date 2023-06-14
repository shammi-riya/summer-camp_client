import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import Sosallogin from "../../Shared/Sosallogin";


const SighinUp = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, seterror] = useState("");
    const [fireBaseerr, setFirebaseErr] = useState("")

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            seterror("no match your password and confirm password")
        } else if (data.password.length > 6) {
            seterror("give at least 6 digit password")
        }
        else {
            seterror("")
        }

        createUser(data.email, data.password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);






                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUserData = { name: data.name, img: data.photoURL, email: data.email }
                        fetch("https://summer-camp-surver.vercel.app/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUserData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully ',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })



                    }).catch((error) => {
                        setFirebaseErr(error.Message)
                    });

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseErr(errorMessage)
                console.log(errorCode, errorMessage);
                // ..
            });







        console.log(data);
        reset()
        navigate("/sighinIn")
    }
    return (
        <div className=" h-[100vh]">
            <form className="w-1/2 mx-auto bg-slate-200 p-10"



                onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl py-2 text-center font-semibold">Sighin Up</h2>


                <div >
                    <label className="text-xl my-2"
                        htmlFor="">Name</label>
                    <input className="w-full py-2 bg-white pl-3 my-2"
                        type="name" placeholder="Your name"
                        {...register("name", { required: true })} />
                </div>


                <div >
                    <label className="text-xl my-3"
                        htmlFor="">email*</label>
                    <input className="w-full py-2 bg-white pl-3 my-2"
                        type="email" placeholder="email"
                        {...register("email", { required: true })} />
                </div>


                <div className="my-3 relative">
                    <label className="text-xl " htmlFor="">password*</label>
                    <input type={showPassword ? 'text' : 'password'}  {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })} placeholder="password" className=" py-2 w-full px-3" />
                    <span
                        className="ml-2 cursor-pointer absolute right-3 top-1/2 text-xl"
                        onClick={togglePassword}
                    >
                        {showPassword ? <><BsEye></BsEye></> : <><BsEyeSlash></BsEyeSlash></>

                        }
                    </span>
                </div>


                <div className="my-3 relative">
                    <label className="text-xl " htmlFor="">Confirm password*</label>
                    <input className="w-full py-2 bg-white pl-3 my-2 px-3"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="**************"
                        {...register("confirmPassword",

                            { required: true })} />
                    <span
                        className="ml-2 cursor-pointer absolute right-3 top-1/2 text-xl"
                        onClick={togglePassword}
                    >
                        {showPassword ? <><BsEye></BsEye></> : <><BsEyeSlash></BsEyeSlash></>

                        }
                    </span>
                </div>


                <div className="my-3">
                    <label className="text-xl " htmlFor="">Photo URL*</label>
                    <input className="w-full py-2 bg-white pl-3 my-2 "
                        type="url"
                        placeholder="photo url"
                        {...register("photoURL",
                            { required: true })} />

                </div>





                {/* errors will return when field validation fails  */}
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}

                
                <p className="text-red-500">{error}</p>
                <p className="text-red-500">{fireBaseerr}</p>

                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must haveone special character, one lowercase one lower case and one number and at least 6 digit</p>}

                <input className="w-full  bg-[#07332F] text-white text-xl py-2 my-2" value="Sighin Up" type="submit" />
                <div className="divider">OR</div>

                <Sosallogin></Sosallogin>

                <p>You Have Already have account? please <span className="font-semibold"><Link to="/sighinIn">Sighin In</Link></span></p>
            </form>

        </div>
    );
};

export default SighinUp;