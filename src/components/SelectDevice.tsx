"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const devices = [
  { name: "iPhone", icon: "/Capture.PNG", route: "/iphone" },
  { name: "Samsung", icon: "/Capture1.PNG", route: "/samsung" },
  { name: "Oppo", icon: "/Capture2.PNG", route: "/oppo" },
  { name: "Xiaomi", icon: "/Capture.PNG", route: "/xiaomi" },
  { name: "Realme", icon: "/Capture.PNG", route: "/realme" },
  { name: "OnePlus", icon: "/Capture1.PNG", route: "/oneplus" },
  { name: "Huawei", icon: "/Capture2.PNG", route: "/huawei" },
  { name: "Nothing", icon: "/Capture1.PNG", route: "/nothing" },
];

const DeviceSlider = () => {
  const swiperRef = useRef<SwiperType>();
  const router = useRouter();

  const goToSlide = (route: string) => {
    router.push(route);
  };

  return (
    <div className="flex flex-col w-full py-8 bg-gray-100 justify-center items-center">
      <h2 className="text-center text-lg font-bold mb-4">SELECT DEVICE</h2>
      <div className="relative w-[80%] ">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {devices.map((device, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => goToSlide(device.route)}
                className="cursor-pointer bg-slate-100 hover:rounded-lg flex flex-col items-center justify-center w-[120px] h-[140px] mx-auto transition-all duration-300 hover:shadow-lg hover:shadow-black hover:bg-gray-100 hover:scale-105 hover:border-gray-300 my-2"
              >
                <Image
                  src={device.icon}
                  alt={device.name}
                  className="h-16 w-auto mb-2"
                  width={64}
                  height={64}
                />
                <p className="text-sm font-medium">{device.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center z-10"
          title="Previous slide"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft size={10} className="text-gray-700" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center z-10"
          title="Next slide"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight size={10} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default DeviceSlider;
