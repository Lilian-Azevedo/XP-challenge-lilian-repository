import React from 'react'

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
        <div>
          <div>
          {/* Fazer um map aqui dentro */}
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
      </section>
    </div>
  )
}

export default UserStocks;