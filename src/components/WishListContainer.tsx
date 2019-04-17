import React from 'react';
import { observer } from 'mobx-react';

import WishListItem from './WishListItem';
import { IWishListItem, IWishList } from '../models/wishList';
import { wishList } from './../App';

const WishListView: React.FC<IWishList> = props => {
  const wishList = props;
  return (
    <div className="list">
      <ul>
        {wishList.items.map((item: IWishListItem, index: number) => (
          <WishListItem key={index} id={index} item={item as IWishListItem} />
        ))}
      </ul>
      Total: {wishList.totalPrice} €
    </div>
  );
};

export default observer(WishListView);
