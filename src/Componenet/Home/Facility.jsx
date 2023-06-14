import './Facilt.css'
import im1 from '../../assets/review-1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";


const Facility = () => {
    return (
       <div>
        
       <h1 className='text-3xl font-semibold text-center border-b-4 w-72 mx-auto'>Our Testimonial</h1>
         <div className="hero min-h-screen img px-32 my-20" >
           
           <div className="hero-content text-center">
               <div className="max-w-md lg:block hidden">
                   <>
                       <Swiper
                           spaceBetween={30}
                           pagination={{
                               clickable: true,
                           }}
                           modules={[Pagination]}
                           className="mySwiper"
                       >
                           <SwiperSlide>

                               <div className='py-16 px-10'>
                                  <div className='w-24 h-24 mx-auto'>
                                  <img  src={im1} alt="" />
                                  </div>
                                  
                                   <p className="mb-5">Enjoy the beauty of stunning sights and landmarks assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                   <h2>--Mandis Thamara</h2>
                                  
                               </div>

                           </SwiperSlide>
                           <SwiperSlide>

                               <div className='py-16 px-10'>
                                  <div className='w-24 h-24 mx-auto'>
                                  <img  src={im1} alt="" />
                                  </div>
                                  
                                   <p className="mb-5">Enjoy the beauty of stunning sights and landmarks assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                   <h2>--Mandis Thamara</h2>
                                  
                               </div>

                           </SwiperSlide>
                           <SwiperSlide>

                               <div className='py-16 px-10'>
                                  <div className='w-24 h-24 mx-auto'>
                                  <img  src={im1} alt="" />
                                  </div>
                                  
                                   <p className="mb-5">Enjoy the beauty of stunning sights and landmarks assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                   <h2>--Mandis Thamara</h2>
                                  
                               </div>

                           </SwiperSlide>
                           

                       </Swiper>


</>


                  
               </div>
               </div>
           </div>
       </div>
            
            );
};

 export default Facility;