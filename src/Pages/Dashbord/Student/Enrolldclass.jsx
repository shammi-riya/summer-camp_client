import { useState } from "react";


const Enrolldclass = () => {
   const [enrolslData,setEnrollsData] = useState([])


    fetch("https://summer-camp-surver.vercel.app/enrollClass")
    .then(res=>res.json())
    .then(data=>setEnrollsData(data))
   




    return (
        <div className="my-10">
             <h1 className="text-3xl my-5 text-center">My Enroll Class</h1>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
   
    {/* head */}
    <thead>
      <tr className="text-xl">
      <th>#</th>
      <th>Class Name</th>
        <th>transactionId</th>
       
        <th>status</th>
        <th>date</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    {
        enrolslData.map((enrollData,i)=><> <tr>
        <th>
          {i+1}
        </th>
        <td>
          
           <span>{enrollData.className}</span>
          
        </td>
        <td>
         
          <span>{enrollData.transactionId}</span>
        </td>
        <td>{enrollData.status}</td>
        <td>{enrollData.date}</td>
        <td>${enrollData.price}</td>
        
      </tr>
      
     </>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Enrolldclass;