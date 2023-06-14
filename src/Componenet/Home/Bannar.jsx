

import bannar1 from '../../assets/bann3.webp' 
import bannar2 from '../../assets/banna2.webp' 
import bannar3 from '../../assets/bannar1.webp' 
import bannar4 from '../../assets/bannar6.webp' 
import bannar5 from '../../assets/bnnar6.jpeg' 

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './bannar.css'

const Bannar = () => {
    return (
      <div className='h-[86vh] mt-20'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='relative w-full text-white space-y-3'>
           <img src={bannar2} alt="" />
           <div className='absolute top-[40%] left-[10%] text-white '>
           <h1 className='lg:text-6xl text-center text-3xl font-bold'>Hello Summer </h1>
           <div className='hidden lg:block'>
           <h1 className='text-xl mx-50'>Summer camp is a program for children or teens during summer months in many countries. Children and adolescents are called campers.</h1>
          <button className='py-3 mt-4 rounded-md px-5 bg-[#07332F] text-white'>Regastrasion</button>
           </div >
           </div>
            

           </div>

      
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-full text-white space-y-3'>
           <img src={bannar1} alt="" />
           <div className='absolute top-[40%] left-[10%] text-white '>
           <h1 className='lg:text-6xl text-center text-3xl font-bold'>Hello Summer </h1>
           <div className='hidden lg:block'>
           <h1 className='text-xl mx-50'>Summer camp is a program for children or teens during summer months in many countries. Children and adolescents are called campers.</h1>
          <button className='py-3 mt-4 rounded-md px-5 bg-[#07332F] text-white'>Regastrasion</button>
           </div >
           </div>
            

           </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-full text-white space-y-3'>
           <img src={bannar3} alt="" />
           <div className='absolute top-[40%] left-[10%] text-white '>
           <h1 className='lg:text-6xl text-center text-3xl font-bold'>Hello Summer </h1>
           <div className='hidden lg:block'>
           <h1 className='text-xl mx-50'>Summer camp is a program for children or teens during summer months in many countries. Children and adolescents are called campers.</h1>
          <button className='py-3 mt-4 rounded-md px-5 bg-[#07332F] text-white'>Regastrasion</button>
           </div >
           </div>
            

           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-full text-white space-y-3'>
           <img src={bannar4} alt="" />
           <div className='absolute top-[40%] left-[10%] text-white '>
           <h1 className='lg:text-6xl text-center text-3xl font-bold'>Hello Summer </h1>
           <div className='hidden lg:block'>
           <h1 className='text-xl mx-50'>Summer camp is a program for children or teens during summer months in many countries. Children and adolescents are called campers.</h1>
          <button className='py-3 mt-4 rounded-md px-5 bg-[#07332F] text-white'>Regastrasion</button>
           </div >
           </div>
            

           </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-full text-white space-y-3'>
           <img src={bannar5} alt="" />
           <div className='absolute top-[40%] left-[10%] text-white '>
           <h1 className='lg:text-6xl text-3xl font-bold'>Hello Summer </h1>
            <div className='lg:block hidden '>
            <h1 className='text-xl '>Summer camp is a program for children or teens during summer months  in many countries. Children and adolescents are called campers.</h1>
          <button className='py-3 mt-4 rounded-md px-5 bg-[#07332F] text-white'>Regastrasion</button>
            </div>
           </div >
            

           </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-full text-white space-y-3'>
           <img src={bannar5} alt="" />
           <div className='absolute top-[40%] left-[10%] text-white '>
           <h1 className='lg:text-6xl text-center text-3xl font-bold'>Hello Summer </h1>
           <div className='hidden lg:block'>
           <h1 className='text-xl mx-50'>Summer camp is a program for children or teens during summer months in many countries. Children and adolescents are called campers.</h1>
          <button className='py-3 mt-4 rounded-md px-5 bg-[#07332F] text-white'>Regastrasion</button>
           </div >
           </div>
            

           </div>

        </SwiperSlide>
      
      </Swiper>
      </div>
    );
};

export default Bannar;