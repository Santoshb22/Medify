import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Carousel.module.css';
import { carouselImage } from '../../Data/data';

import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className={styles.CarouselContainer}>
      <Swiper slidesPerView={3} 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        {
            carouselImage.map((data, idx) => <SwiperSlide className={styles.carouselImages} key={idx}><img src={data.img} alt="carousel img" /></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
}
