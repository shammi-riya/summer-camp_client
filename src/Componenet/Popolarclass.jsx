import useClass from "../Hook/useClass";


const PopolarclassName = () => {
    const [topClass] = useClass()
    console.log(topClass);
    return (
      <div className="my-6">
        <h1 className="text-3xl font-bold text-center">Our Popular Class</h1>
          <div className="grid md:grid-cols-2 max-w-7xl mx-auto my-20 lg:grid-cols-3 gap-8">
            {
                topClass.map(classes=><>
 
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="h-[300px] w-full relative" src={classes.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {classes.className}
     
    </h2>
    <h4 className="absolute top-2 right-2 p-3"> Student Number:{classes.numberOfStudents}</h4>
    
    <div className="card-actions justify-end">
     <button>View Details</button>
    </div>
  </div>
</div>

                </>)
            }
        </div>
      </div>
    );
};

export default PopolarclassName;