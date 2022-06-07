import { useContext } from 'react';
import { ShopContext } from '../context';

import BasketItem from './BasketItem';

function BasketList() {
  const { order = [], handleBasketClose = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <>
      <div className='shop-basket'>
        <ul className='collection'>
          <li className='collection-item white-text blue-grey darken-4 basket-header'>
            Basket
            <i
              className='material-icons basket-close'
              role='button'
              onClick={handleBasketClose}
            >
              close
            </i>
          </li>
          {order.length ? (
            order.map((item) => <BasketItem key={item.id} {...item} />)
          ) : (
            <li className='collection-item'>Basket is empty</li>
          )}
          <li className='collection-item white-text blue-grey darken-4 basket-footer'>
            Total price:
            <div className='basket-total-price'>{totalPrice} rub.</div>
          </li>
          <li className='collection-item center-align blue-grey darken-3'>
            <button type='button' className='btn purple darken-1 btn-small'>
              Сheckout
            </button>
          </li>
        </ul>
      </div>
      <div className='shop-basket-overlay'></div>
    </>
  );
}

export default BasketList;
