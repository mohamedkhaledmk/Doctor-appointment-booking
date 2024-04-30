import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakPoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={patientAvatar}
                alt="patient-avatar"
              />
              <div>
                <h3 className="text-headingColor font-[700] text-[14px] lg:text-[16px]">
                  Muhammad Khaled
                </h3>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-textColor font-[400] text-[14px] lg:text-[16px]">
              I've taken medical services from them. They treat so well and they
              are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={patientAvatar}
                alt="patient-avatar"
              />
              <div>
                <h3 className="text-headingColor font-[700] text-[14px] lg:text-[16px]">
                  Muhammad Khaled
                </h3>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-textColor font-[400] text-[14px] lg:text-[16px]">
              I've taken medical services from them. They treat so well and they
              are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={patientAvatar}
                alt="patient-avatar"
              />
              <div>
                <h3 className="text-headingColor font-[700] text-[14px] lg:text-[16px]">
                  Muhammad Khaled
                </h3>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-textColor font-[400] text-[14px] lg:text-[16px]">
              I've taken medical services from them. They treat so well and they
              are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-3">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={patientAvatar}
                alt="patient-avatar"
              />
              <div>
                <h3 className="text-headingColor font-[700] text-[14px] lg:text-[16px]">
                  Muhammad Khaled
                </h3>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-textColor font-[400] text-[14px] lg:text-[16px]">
              I've taken medical services from them. They treat so well and they
              are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
