

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
      <div className='h-[86vh]'>
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
           <div className='relative w-full text-white'>
           <img src={bannar2} alt="" />
           <div className='absolute top-1/2 left-[40%] text-red-700'>
           <h1 className='text-5xl font-bold'>Hello Summer </h1>
            <h1 >Childhood Camp</h1>
          <button className='py-2 px-4 bg-red-600 text-white'>Regastrasion</button>
           </div >
            

           </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={bannar1} alt="" />

        </SwiperSlide>
        <SwiperSlide>
            <img src={bannar2} alt="" />

        </SwiperSlide>
        <SwiperSlide>
            <img src={bannar3} alt="" />

        </SwiperSlide>
        <SwiperSlide>
            <img src={bannar4} alt="" />

        </SwiperSlide>
        <SwiperSlide>
            <img src={bannar5} alt="" />

        </SwiperSlide>
      
      </Swiper>
      </div>
    );
};

export default Bannar;