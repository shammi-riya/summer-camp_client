import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Instructor = () => {


    const [axiosSecure] = useAxiosSecure();
    const { data: instractors = [] } = useQuery(['instractors'], async () => {
        const res = await axiosSecure.get("/instractors")
        return res.data;
    })
   



    return (
        <div className="my-32 px-32">
           <h1 className="text-3xl my-5 font-bold text-center text-[#053b36] w-80 mx-auto border-[#053b36] border-b-4">Our Instructor</h1>

           <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >


{
    instractors.map(instractor=><>
    
    <SwiperSlide key={instractor._id}>
        
    <div 
className='flex flex-col justify-center items-center max-w-sm mx-auto my-8'>
  <div 
       className="bg-gray-300 h-64 w-72 rounded shadow-md bg-cover bg-center">
        <img className="h-64  w-full rounded-md" src={instractor.img} alt="" />
       </div>
  <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{instractor.name}</div>
    <div className="text-center bg-[#053b36] text-md text-white">
      <h3>{instractor.email}</h3>
    </div>
  </div>
</div>
        
        
        </SwiperSlide></>
   )
}

        
       
      </Swiper>
    </>



</div>





        
    );
};

export default Instructor;