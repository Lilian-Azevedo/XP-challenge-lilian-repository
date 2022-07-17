import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// import Card from './Card';

const UserStocks = () => {
  return (
    <div>
      <div>
        <h1>Minhas Ações</h1>
      </div>
      <section className='container-stocks-user'>
        <div>
          <p>Aqui fica a lista</p>
          <div>
            <h3>Ação</h3>
            <h3>Quantidade</h3>
            <h3>Valor</h3>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}>
          <SwiperSlide>
            <h1>Teste1</h1>
            {/* <Card /> */}
          </SwiperSlide>

            <SwiperSlide>
                <h1>Teste2</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Teste3</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Teste</h1>
            </SwiperSlide>
        </Swiper>
        {/* <section>
          <div>
            <div>
            {/* Fazer um map aqui dentro
              <p>Aqui fica os cards</p>
            </div>
          </div>
          <div class="swiper-button-next">
              <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>

          <div class="swiper-pagination" />
        </section> */}
      </section>
    </div>
  )
}

export default UserStocks;