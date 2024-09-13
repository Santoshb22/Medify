import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Carousel.module.css';

import { Pagination } from 'swiper/modules';

export default function Carousel({carouselData, grabCursor = false, drDetails = false}) {
  return (
    <div className={grabCursor? styles.grabCarousel : styles.CarouselContainer}>
      <Swiper slidesPerView={grabCursor? 4 : 3} 
        spaceBetween={30}
        centeredSlides={grabCursor ? true : false}  
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        {
            carouselData.map((data, idx) => (
            <SwiperSlide className={drDetails? styles.doctorsContainer : styles.carouselData} key={idx}>
              <img src={data.img} alt="carousel img" />
              {
                drDetails && (
                  <div className={styles.drData}>
                    <p className={styles.drName}>{data.name}</p>
                    <p className={styles.drType}>{data.specialists}</p>
                  </div>
                )
              }
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
