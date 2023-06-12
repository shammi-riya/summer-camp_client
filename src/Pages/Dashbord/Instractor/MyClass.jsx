import { AuthContext } from "../../../Provider/Authprovider";
import { useContext, useEffect } from "react";
import { useState } from "react";

const MyClass = () => {
  const { users, loading } = useContext(AuthContext);
  const [instractorClass, setInstractorClass] = useState([]);

  useEffect(() => {
    if (users) {
      fetch(`http://localhost:5000/instractor/${users?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data, 'data');
          setInstractorClass(data);
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instractorClass.map((singleClass, i) => (
              <tr key={singleClass._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={singleClass.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{singleClass.className}</td>
                <td>{singleClass.instructorName}</td>
                <td>{singleClass.instructorEmail}</td>
                <td>{singleClass.availableSeats}</td>
                <td>{singleClass.status}</td>
                <td>{singleClass.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;