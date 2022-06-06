function Cart(props) {
  const { quantity = 0, handleBasketToggle = Function.prototype } = props;

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
