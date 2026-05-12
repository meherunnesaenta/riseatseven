// ClientMarquee.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const ClientMarquee = ({ logos }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={30}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={5000}
      loop={true}
      className="overflow-hidden"
    >
      {logos.map((logo, i) => (
        <SwiperSlide key={i} className="!w-auto">
          <img src={logo} alt={`client-${i}`} className="h-12 w-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};