import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';

import GoodsList from './GoodsList';
import Preloader from './Preloader';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
  const { loading, isShowBasket, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isShowBasket && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Shop;
