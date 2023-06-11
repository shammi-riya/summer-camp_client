import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseSelectClass from "../../Hook/UseSelectClass";


const SingleClass = ({singleClass}) => {
  const {users} = useContext(AuthContext);
  const location = useLocation()
  const [,refetch]= UseSelectClass()
  const navigate = useNavigate()
    const {_id,img,className,instructorName,availableSeats,price,numberOfStudents} = singleClass;


  const handleSelect = ()=>{
     if(users){
      const saveClass = {classId:_id ,className, img,instructorName,availableSeats,price,numberOfStudents,email:users.email}
       fetch("http://localhost:5000/selectClass",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(saveClass)
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.insertedId){
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'select success',
            showConfirmButton: false,
            timer: 1500
          })
        }
       })
     }
     else{
      Swal.fire({
        title: 'if you select this course please login',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          
           navigate("/sighinIn",{state:{from:location}})
          
        }
      })
     }
  }

  const cardStyle = {
    backgroundColor: availableSeats === 0 ? 'red' : 'white',
  };


    return (
        <div style={cardStyle}
        className="card card-compact bg-base-100 shadow-xl">
        <figure><img className="h-[300px] w-full" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>Instractor Name:{instructorName}</p>
          <p>Number Of Student : {numberOfStudents}</p>
          <p>Price: ${price}</p>
          <p>Avalable Seats: {availableSeats}</p>
          <div className="card-actions justify-end">
            <button  onClick={handleSelect}
             disabled={availableSeats === 0}
            className="btn ">Select</button>
          </div>
        </div>
      </div>
    );
};

export default SingleClass;