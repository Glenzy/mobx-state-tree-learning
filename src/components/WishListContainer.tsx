import React from 'react';
import { observer } from 'mobx-react';

import WishListItem from './WishListItem';
import WishListAddItem from './WishListAddItem';
import { IWishListItem, IWishList } from '../models/wishList';

const WishListView: React.FC<IWishList> = props => {
  const wishList = props;
  return (
    <div className="list">
      <ul>
        {wishList.items.map((item: IWishListItem, index: number) => (
          <WishListItem key={index} id={index} item={item as IWishListItem} />
        ))}
      </ul>
      <WishListAddItem />
      Total: {wishList.totalPrice} €
    </div>
  );
};

export default observer(WishListView);
