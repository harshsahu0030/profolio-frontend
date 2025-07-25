// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { A11y, Pagination, Autoplay } from "swiper/modules";

const Slider = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, A11y, Autoplay]}
        className="h-full w-full"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <figure
              key={index}
              className="min-h-100 md:min-h-60 w-full flex flex-col items-center justify-center p-8 text-center bg-surface"
            >
              <blockquote className="mb-4">
                <p className="my-4">{item?.comment}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <div className="font-medium ">
                  <div>{item?.name}</div>
                  <div className="text-sm">{item?.company}</div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
