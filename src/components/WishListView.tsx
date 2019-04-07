import React from 'react';
import { observer } from 'mobx-react';

import WishListItemView from './WishListItemView';
import { IWishListItem, IWishList } from '../models/wishList';

const WishListView = (wishList: IWishList) => (
  <div className="list">
    <ul>
      {wishList.items.map((item: IWishListItem, idx: number) => (
        <WishListItemView key={idx} {...item} />
      ))}
    </ul>
    Total: {wishList.totalPrice} €
  </div>
);

export default observer(WishListView);
