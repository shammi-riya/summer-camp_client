import useClass from "../Hook/useClass";
import { Fade, Slide } from "react-awesome-reveal"

const PopolarclassName = () => {
  const [topClass] = useClass()

  return (
    <div className="my-10">
      <Slide>
        <h1 className="text-3xl my-5 font-bold text-center text-[#053b36] w-80 mx-auto border-[#053b36] border-b-4">Our Popular Class</h1>
      </Slide>

      <div className="grid md:grid-cols-2 grid-cols-1 px-5 lg:px-32 my-20 lg:grid-cols-3 gap-8">
        {
          topClass.map(classes => <>

            <Fade delay={1e3} cascade damping={1e-1}>


              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[300px] w-full " src={classes.img} alt="Shoes" /></figure>
                <div className="card-body text-[#053b36]">
                  <h2 className="card-title">
                    {classes.className}

                  </h2>
                  <h4 className="text-lg"> Student Number:{classes.numberOfStudents}</h4>

                  <div className="card-actions justify-end">
                    <button className="text-white hover:bg-[#0c7468] bg-[#07332F] py-3 px-3 rounded font-semibold">View Details</button>
                  </div>
                </div>
              </div>

            </Fade>


          </>)
        }
      </div>
    </div>
  );
};

export default PopolarclassName;