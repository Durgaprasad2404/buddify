import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Package() {
  return (
    <>
      <section className="package-container" id="packagePricing">
        <h1 className="heading-main my-3">Package & Pricing</h1>
        <div className="px-3">
          <q>
            Choose the support that fits your journey. With flexible packages
            starting from 4999 for four heartfelt sessions, finding a Bud who
            listens is accessible to everyone. Explore our options and find the
            one that speaks to you.
          </q>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            loop: true,
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          autoplay={{ delay: 2000 }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./images/1-1.png" className="d-image" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/1-2.png" className="d-image" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/1-3.png" className="d-image" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/1-4.jpg" className="d-image" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/1-5.jpg" className="d-image" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/1-6.jpg" className="d-image" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/1-7.jpg" className="d-image" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/1-8.jpg" className="d-image" alt="#" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Package;
