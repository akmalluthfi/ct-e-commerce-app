import { Container, Ratio, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Category from '../components/Category';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const categories = ['Foods', 'Drink', 'Snack', 'Frozen Food', 'Localhost'];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Ratio aspectRatio='21x9'>
            <img src='https://source.unsplash.com/random/?keyboard' alt='' />
          </Ratio>
        </SwiperSlide>
        <SwiperSlide className='ratio ratio-21x9'>
          <Ratio aspectRatio='21x9'>
            <img src='https://source.unsplash.com/random/?car' alt='' />
          </Ratio>
        </SwiperSlide>
        <SwiperSlide className='ratio ratio-21x9'>
          <Ratio aspectRatio='21x9'>
            <img src='https://source.unsplash.com/random/?laptop' alt='' />
          </Ratio>
        </SwiperSlide>
        <SwiperSlide className='ratio ratio-21x9'>
          <Ratio aspectRatio='21x9'>
            <img
              src='https://source.unsplash.com/random/?mechanical-keyboard'
              alt=''
            />
          </Ratio>
        </SwiperSlide>
      </Swiper>
      <Container>
        <h1 className='my-3 fw-bold'>Categories</h1>
        <Row xs={1} md={2} lg={3} xl={4}>
          {categories.map((category, i) => (
            <Category key={i} name={category} />
          ))}
        </Row>
      </Container>
    </>
  );
}
