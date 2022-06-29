import { Container, Ratio, Row, Col, Placeholder } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Category from '../components/Category';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { getAccTk, getApiKey, getBaseUrl } from '../models/storage';

export default function Home() {
  const [banners, setBanners] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getBanners = () => {
      const url = `${getBaseUrl()}/banners`;
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getApiKey()}`,
      };
      return axios.get(url, { headers });
    };

    const getCategories = () => {
      const url = `${getBaseUrl()}/merchants/categories`;
      const headers = {
        'Content-Type': 'application/json',
        'x-api-key': getApiKey(),
        'access-token': getAccTk(),
      };
      return axios.get(url, { headers });
    };

    const fetch = async () => {
      try {
        const [responseBanners, responseCategories] = await Promise.all([
          getBanners(),
          getCategories(),
        ]);

        // handle banners
        if (!responseBanners.data.success)
          throw new Error(responseBanners.data.message);
        setBanners(responseBanners.data.banners);

        // handle categories
        if (!responseCategories.data.success)
          throw new Error(responseCategories.data.message);
        setCategories(responseCategories.data.categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  const renderBanners = () => {
    return banners.map((banner, index) => (
      <SwiperSlide key={index}>
        <Ratio aspectRatio='21x9'>
          <img src={banner.picture_url} alt={banner.title} />
        </Ratio>
      </SwiperSlide>
    ));
  };

  const renderCategories = () => {
    return categories.map((category) => (
      <Category key={category.id} name={category.name} />
    ));
  };

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
        {banners === null ? loadBanner() : renderBanners()}
      </Swiper>
      <Container>
        <h1 className='my-3 fw-bold'>Categories</h1>
        <Row xs={1} md={2} lg={3} xl={4}>
          {categories === null ? loadCategory() : renderCategories()}
        </Row>
      </Container>
    </>
  );
}

function loadCategory() {
  return (
    <>
      <Col className='mb-3'>
        <Placeholder animation='glow'>
          <Placeholder bg='secondary' className='p-3 rounded' xs={12}>
            <h3 className='text-center'>Loading...</h3>
          </Placeholder>
        </Placeholder>
      </Col>
      <Col className='mb-3'>
        <Placeholder animation='glow'>
          <Placeholder bg='secondary' className='p-3 rounded' xs={12}>
            <h3 className='text-center'>Loading...</h3>
          </Placeholder>
        </Placeholder>
      </Col>
      <Col className='mb-3'>
        <Placeholder animation='glow'>
          <Placeholder bg='secondary' className='p-3 rounded' xs={12}>
            <h3 className='text-center'>Loading...</h3>
          </Placeholder>
        </Placeholder>
      </Col>
    </>
  );
}

function loadBanner() {
  return (
    <SwiperSlide>
      <Ratio aspectRatio='21x9'>
        <Row className='h-100 bg-secondary bg-opacity-10 align-items-center'>
          <Col>
            <h1>Loading...</h1>
          </Col>
        </Row>
      </Ratio>
    </SwiperSlide>
  );
}
