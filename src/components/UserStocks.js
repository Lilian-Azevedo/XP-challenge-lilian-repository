import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../styles/slides.css';
import Card from './Card';

const arrayTest = [{ name: 'Azul4', qtd: 100, value: 350 }, { name: 'Petr4', qtd: 150, value: 350 }, { name: 'Vale4',  qtd: 100, value: 350 }, { name: 'Petr4',  qtd: 100, value: 350 }]

const UserStocks = () => {
  return (
    <div>
      <div>
        <h2>Minhas Ações</h2>
      </div>
      <section className='container-stocks-user'>
        <div>
          <h4>Ação</h4>
          <h4>Quantidade</h4>
          <h4>Valor</h4>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={ true }>
            {arrayTest.map((item, index) => (
              <SwiperSlide key={index}>
                <Card {...item}/>
              </SwiperSlide>
            ))}           
        </Swiper>
      </section>
    </div>
  )
}

export default UserStocks;