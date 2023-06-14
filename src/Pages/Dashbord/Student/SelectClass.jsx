import Swal from "sweetalert2";
import UseSelectClass from "../../../Hook/UseSelectClass";
import { useNavigate } from "react-router-dom";


const SelectClass = () => {

    const [selectClass, refetch] = UseSelectClass()
    
    const totalPrice = selectClass.reduce((sum, item) => item.price + sum, 0)
   const navigate = useNavigate()

    const handleDelete = (clases) => {
        console.log(clases);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://summer-camp-surver.vercel.app/selectClass/${clases._id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    

const handlePay = (clases)=>{
    
    navigate("/dashboard/pement", { state: {_id:clases._id, classId:clases.classId ,name:clases.className ,price: clases.price} });
}







    return (
        <div className="my-10">
            <div className="my-5 flex justify-between">
                <div>
                    <h1>Total Select Class: {selectClass.length}</h1>
                    <h1>Total Course Fee:{totalPrice}</h1>

                </div>
                <div>

                </div>
            </div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Class Image</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Pement</th>
                            </tr>
                        </thead>


                        <tbody>
                            {
                                selectClass.map((clases, i) => <>
                                    <tr key={clases._id}>

                                        <td>{i + 1}</td>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={clases.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            {clases.className}
                                        </td>
                                        <td>${clases.price}</td>

                                        <th>
                                            <button onClick={() => handleDelete(clases)}
                                                className=" py-2 px-4 rounded bg-slate-800 text-white text-md">delete</button>
                                        </th>
                                        <th>
                                          
                                               
                                            
                                                <button onClick={()=>handlePay(clases)} className="btn btn-square">Pay</button>
                                           

                                        </th>

                                     
                                    </tr>



                                </>)
                            }

                        </tbody>


                    </table>
                </div>











                {/* {
            selectClass.map(classes=><>
            
            </>)
           } */}
            </div>
        </div>
    );
};

export default SelectClass;