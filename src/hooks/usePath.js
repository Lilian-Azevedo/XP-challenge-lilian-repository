import { useLocation } from 'react-router-dom';

const usePath = () => {
  let sellStocks = false;
  let titleAction = 'Comprar';
  const { pathname } = useLocation();
  if (pathname.includes('/sell')) {
    sellStocks = true;
    titleAction = 'Vender';
  }
  return { sellStocks, titleAction };
};

export default usePath;
