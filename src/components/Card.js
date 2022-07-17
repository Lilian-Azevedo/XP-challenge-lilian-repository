import React from 'react'

const UserStocks = () => {
  return (
    <div class="portfolio_content grid swiper-slide">
        <h3>Name Action</h3> 
        {/* colocar imagem da empresa*/}
        <div class="portfolio_data">
            <h3 class="portfolio_title">Nome Action</h3>
            <p class="portfolio_description">Quantidade</p>
            <p class="portfolio_description">Valor</p>

            <a href="#" class="button button--flex button--small portfolio_button">
                <i class="uil uil-arrow-right button_icon"></i>
            </a>
        </div>
    </div>
  )
}

export default UserStocks;