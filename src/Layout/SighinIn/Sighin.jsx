import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {BsEyeSlash,BsEye } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import Sosallogin from "../../Shared/Sosallogin";



const Sighin = () => {
    
    const {sighinIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const [fireBaseerr,setFirebaseErr] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
      };
      const from = location?.state?.pathname || '/'

    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        
        sighinIn(data.email, data.password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            reset()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(user);
            navigate(from, { replace: true })

            


            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFirebaseErr(errorMessage)
            console.log(errorCode, errorMessage);
            // ..
        });
        
        console.log(data)};
  






    return (
        <div className="grid md:grid-cols-2 gap-8
        px-20 py-20 h-[100vh] bg-slate-100">
           
            <form  className="w-full"
            onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl my-3 text-center font-semibold">Sighin In</h2>
     <div >
        <label className="text-xl my-3" 
        htmlFor="">email*</label>
     <input className="w-full py-2 bg-white pl-3 my-2"
     type="email"
    {...register("email",{ required: true })} />
     </div>
      
    
     <div className="my-3 relative">
     <label className="text-xl " htmlFor="">password*</label>
     <input className="w-full py-2 bg-white pl-3 my-2 "
      type={showPassword ? 'text' : 'password'} 
     {...register("password", 
     { required: true })} />
      <span
          className="ml-2 cursor-pointer absolute right-3 top-1/2 text-xl"
          onClick={togglePassword}
        >
          {showPassword ?<><BsEye></BsEye></> :<><BsEyeSlash></BsEyeSlash></>
            
          }
          </span>
     </div>





      {/* errors will return when field validation fails  */}
      {errors.password && <span className="text-red-600">This field is required</span>}
      {errors.email && <span className="text-red-600">This field is required</span>}
      <p className="text-red-500">{fireBaseerr}</p>
      
      <input className="w-full  bg-slate-700 text-white text-xl py-2 my-2" value="Sighin In" type="submit" />
      <div className="divider">OR</div>
      <input className="w-full  bg-slate-700 text-white text-xl py-2 my-2" value="Sighin In with gogool" type="submit" />

      <p>You have new to website please <Link to="/sighinUp"><span className="font-semibold">SighinUp</span></Link></p>


      <Sosallogin></Sosallogin>
    </form>

    
 
  


    <div >
        {/* <img src={login} alt="" /> */}
    </div>
        </div>
    );
};

export default Sighin;