import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import usePath from '../hooks/usePath';
import { addProgressToLocal, getProgressFromLocal } from '../services/localStorage';
import { validationFinishButton } from '../store/actions';
// import '../styles/details.css';

const BuyStocks = () => {
  const { sellStocks, titleAction } = usePath();
  const { currentRecipe } = useSelector((state) => state.progress);

  return (
    <div>
      <h1>{ titleAction } Ação</h1>
      <section>
        
      </section>
    </div>
  );
};
export default BuyStocks;
