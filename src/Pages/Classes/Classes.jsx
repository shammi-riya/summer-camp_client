import UseAllClass from "../../Hook/UseAllClass";
import SingleClass from "./SingleClass";


const Classes = () => {
    
        const [allClass, loading] = UseAllClass();
        const approvedClasses = allClass.filter((classItem) => classItem.stutus === 'Approve');
        
      
        if (loading) {
          return <>Loading...</>;
        }
      
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 my-20">
            {approvedClasses.map((singleClass) => (
              <SingleClass key={singleClass._id} singleClass={singleClass} />
            ))}
          </div>
        );
      };
      


export default Classes;