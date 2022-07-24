import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import '../../node_modules/swiper/swiper-bundle.min.css';
// import '../../node_modules/swiper/swiper.min.css';
import '../styles/slides.css';
import Card from './Card';
import { getLastUserAcessFromLocal } from '../services/localStorage';

const UserStocks = () => {
  const [recordsUser, setRecordsUser] = useState([]);

  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    if (user) {
      setRecordsUser(user.recordsStocks);
    }
  }, []);

  return (
    <div className='user-actions'>
      <div>
        <h1 className='h1-title'>Minhas Ações</h1>
      </div>

      { !recordsUser.length
      ? <h3 className='h3-title'>Parece que sua carteira de ações está vazia!</h3>
      :(<section className='container-stocks-user'>
        <div className='container-header-stocks'>
          <h4>Ação</h4>
          <h4>Quantidade</h4>
          <h4>Valor(R$)</h4>
          <h4>Negociar</h4>
        </div>
        { recordsUser.length <= 2
        ? <div className='stocks-user-l2'>
          { recordsUser.map((item, index) => (
            <Card  key={ index } {...item}/>))
          }
        </div>
        :(<div className="scrollmenu">
            {recordsUser.map((item, index) => (
              <div key={index}>
                <Card {...item}/>
              </div>
            ))} 
        </div>)}
      </section>)}
    </div>
  )
}

// (<Swiper
//   modules={[Navigation, Pagination, Scrollbar, A11y]}
//   spaceBetween={30}
//   slidesPerView={2}
//   navigation
//   pagination={{ clickable: true }}
//   loop={ true }>
//     {recordsUser.map((item, index) => (
//       <SwiperSlide key={index}>
//         <Card {...item}/>
//       </SwiperSlide>
//     ))}           
// </Swiper>)

export default UserStocks;