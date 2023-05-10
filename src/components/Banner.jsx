import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../assets/images/banner/1.jpg";
import bg2 from "../assets/images/banner/2.jpg";
import bg3 from "../assets/images/banner/3.jpg";
import bg4 from "../assets/images/banner/4.jpg";
import bg5 from "../assets/images/banner/5.jpg";
import bg6 from "../assets/images/banner/6.jpg";

const banners = [
  { id: 1, img: bg1 },
  { id: 2, img: bg2 },
  { id: 3, img: bg3 },
  { id: 4, img: bg4 },
  { id: 5, img: bg5 },
  { id: 6, img: bg6 },
];

const Banner = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={{
        prevEl: ".prev-btn",
        nextEl: ".next-btn",
        clickable: true,
      }}
      className="mb-12 relative"
    >
      {/* slide */}
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div
            className="bg-cover bg-center aspect-[.8/1] sm:aspect-[1/1] lg:aspect-[1.9/1] rounded-xl mt-4 overflow-hidden"
            style={{ backgroundImage: `url(${banner.img})` }}
          >
            <div className="w-full h-full bg-gradient-to-r from-neutral to-transparent p-12 space-y-6 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl xl:text-7xl text-white font-bold">
                Affordable
                <br />
                Price For Car
                <br />
                Servicing
              </h1>
              <p className="text-white max-w-md md:text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-x-5">
                <button className="btn btn-primary md:btn-lg normal-case">
                  Discover More
                </button>
                <button className="btn text-white hover:text-primary hover:bg-white btn-outline md:btn-lg normal-case">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* controller */}
      <div className="hidden sm:flex items-center gap-x-5 absolute z-10 bottom-4 right-4 sm:bottom-12 sm:right-12">
        <button className="btn prev-btn bg-white/20 btn-circle btn-primary btn-square text-xl  disabled:opacity-0">
          <HiArrowLeft />
        </button>
        <button className="btn next-btn bg-white/20 btn-circle btn-primary btn-square text-xl disabled:opacity-0">
          <HiArrowRight />
        </button>
      </div>
    </Swiper>
  );
};

export default Banner;
