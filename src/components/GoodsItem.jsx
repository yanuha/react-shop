function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: { finalPrice: price },
    displayAssets,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className='card' id={id}>
      <div className='card-image'>
        <img src={displayAssets[0].full_background} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          type='button'
          className='btn grey darken-1'
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Buy
        </button>
        <span className='price'>{price} rub.</span>
      </div>
    </div>
  );
}

export default GoodsItem;
