import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';

import GoodsList from './GoodsList';
import Preloader from './Preloader';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      // const newOrder = order.map((orderItem, index) => {
      //   if (index === itemIndex) {
      //     return { ...orderItem, quantity: orderItem.quantity + 1 };
      //   } else {
      //     return orderItem;
      //   }
      // });
      // setOrder(newOrder);

      const newOrder = [...order];
      newOrder[itemIndex].quantity++;
      setOrder(newOrder);
    }

    setAlertName(item.name);
  };

  const handleBasketToggle = () => {
    setIsShowBasket(!isShowBasket);
  };

  const handleBasketClose = () => {
    setIsShowBasket(false);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === itemId);
    const incOrder = [...order];
    incOrder[itemIndex].quantity++;
    setOrder(incOrder);
  };

  const decQuantity = (itemId) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === itemId);
    const decOrder = [...order];
    const quantity = order[itemIndex].quantity;

    if (quantity > 0) {
      decOrder[itemIndex].quantity--;
      setOrder(decOrder);
    }
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketToggle={handleBasketToggle} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isShowBasket && (
        <BasketList
          order={order}
          handleBasketClose={handleBasketClose}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
