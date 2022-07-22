import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../styles/slides.css';
import Card from './Card';
import { getLastUserAcessFromLocal } from '../services/localStorage';

const UserStocks = () => {
  const [recordsUser, setRecordsUser] = useState([]);

  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    console.log(user);
    if (user) {
      setRecordsUser(user.recordsStocks);
    }
  }, []);

  return (
    <div className='user-actions'>
      <div>
        <h2>Minhas Ações</h2>
      </div>

      { !recordsUser.length
      ? <h3>Parece que sua carteira de ações está vazia</h3>
      :(<section className='container-stocks-user'>
        <div>
          <h4>Ação</h4>
          <h4>Quantidade</h4>
          <h4>Valor</h4>
          <h4>Negociar</h4>
        </div>
        { recordsUser.length <= 2
        ? <div>
          {recordsUser.map((item, index) => (
            <div key={ index }>
              <Card {...item}/>
            </div>))
          }
        </div>
        :(<Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          loop={ true }>
            {recordsUser.map((item, index) => (
              <SwiperSlide key={index}>
                <Card {...item}/>
              </SwiperSlide>
            ))}           
        </Swiper>)}
      </section>)}
    </div>
  )
}

export default UserStocks;