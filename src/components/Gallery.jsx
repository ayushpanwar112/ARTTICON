import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import img1 from '/src/assets/Gallery/img1.jpg';
import img2 from '/src/assets/Gallery/img2.jpg';
import img3 from '/src/assets/Gallery/img3.jpg';
import img4 from '/src/assets/Gallery/img4.jpg';
import img5 from '/src/assets/Gallery/img5.jpg';
import img6 from '/src/assets/Gallery/img6.jpg';
import img7 from '/src/assets/Gallery/img7.jpg';
import img8 from '/src/assets/Gallery/img8.jpg';
import img9 from '/src/assets/Gallery/img9.jpg';
import img10 from '/src/assets/Gallery/img10.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Campus and its Environment</h2>
      <div className="max-w-5xl mx-auto px-4 relative group">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl shadow-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

