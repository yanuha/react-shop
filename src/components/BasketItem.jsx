function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className='collection-item'>
      <span className='title'>
        {name}
        <i
          className='material-icons basket-quantity'
          onClick={() => decQuantity(id)}
        >
          remove
        </i>
        x{quantity}
        <i
          className='material-icons basket-quantity'
          onClick={() => incQuantity(id)}
        >
          add
        </i>
        = {price * quantity} rub.
      </span>
      <span
        className='secondary-content basket-item-remove'
        onClick={() => removeFromBasket(id)}
      >
        <i className='material-icons materialize-red-text text-accent-4'>
          close
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
