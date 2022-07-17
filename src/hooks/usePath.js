import { useLocation } from 'react-router-dom';

const usePath = () => {
  let sellStocks = false;
  const { pathname } = useLocation();
  if (pathname.includes('/sell')) {
    sellStocks = true;
  }
  return { sellStocks };
};

export default usePath;
