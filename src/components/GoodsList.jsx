import { useContext } from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className='goodsList'>
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export default GoodsList;
