import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
  const { order, handleBasketToggle = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;

  return (
    <div
      className='cart blue-grey darken-4 white-text'
      onClick={handleBasketToggle}
    >
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}

export default Cart;
