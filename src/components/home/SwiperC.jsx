import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../assets/mockup/1.png'
import img2 from '../../assets/mockup/2.png'
import img3 from '../../assets/mockup/3.png'
import img4 from '../../assets/mockup/4.png'
import img5 from '../../assets/mockup/5.png'
import img6 from '../../assets/mockup/6.png'
import img7 from '../../assets/mockup/7.png'
import img8 from '../../assets/mockup/8.png'
import img9 from '../../assets/mockup/9.png'
import Card from '../global/Card';



export default () => {

    const json = [
        {
            title : 'T-shirt Polo',
            description : 'Lorem ipsum dolor sit amet ',
            price : 200,
            img : img1,
            user: {
                role:"ADMIN"
            }
        },
        {
            title : 'Book UIR',
            description : 'Lorem ipsum dolor sit amet ',
            price : 140,
            img : img2,
            user: {
                role:"ADMIN"
            }
        },
        {
            title : 'MUG',
            description : 'Lorem ipsum dolor sit amet ',
            price : 100,
            img : img3,
            user: {
                role:"ADMIN"
            }
        },
        {
            title: 'T-shirt UIR 2021',
            description : 'Lorem ipsum dolor sit amet ',
            price: 200,
            img: img4
        },
        {
            title : 'Book UIR 2023',
            description : 'Lorem ipsum dolor sit amet ',
            price : 140,
            img : img5,
            user: {
                role:"ADMIN"
            }
        },
        {
            title : 'DVD UIR France',
            description : 'Lorem ipsum dolor sit amet ',
            price : 100,
            img : img6,
            user:{
                role:"CLIENT"
            }
        },
        {
            title: 'T-shirt UIR 2021',
            description : 'Lorem ipsum dolor sit amet ',
            price: 200,
            img: img7
        },
        {
            title : 'Book UIR 2023',
            description : 'Lorem ipsum dolor sit amet ',
            price : 140,
            img : img8,
            user:{
                role:"CLIENT"
            }
        },
        {
            title : 'DVD UIR France',
            description : 'Lorem ipsum dolor sit amet ',
            price : 100,
            img : img9,
            user:{
                role:"CLIENT"
            }
        }
    ]
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
    //   slidesPerView={4}
    // responsive slides per view
    breakpoints={{
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    style={{
        overflow: 'visible',
    }}
    className='p-7 mt-3 '
    >
      {
        json.map((item, index) => (
            <SwiperSlide key={index} className='p-3 cursor-pointer'>
                <Card name={item.title} price={item.price} user={item.user} img={item.img} description={item.description}/>
            </SwiperSlide>
        ))
      }
    </Swiper>
  );
};