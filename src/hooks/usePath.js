import { useLocation, useRouteMatch } from 'react-router-dom';

const usePath = () => {
  let sellStocks = false;
  let titleAction = 'Comprar';
  const { pathname } = useLocation();
  const { params: { id } } = useRouteMatch();
  if (pathname.includes('/sell')) {
    sellStocks = true;
    titleAction = 'Vender';
  }
  return { sellStocks, titleAction, pathname, id };
};

export default usePath;
