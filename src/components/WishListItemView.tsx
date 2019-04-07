import React, { useState } from 'react';
import { observer, useObservable } from 'mobx-react-lite';

import { IWishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';

const WishListItemView = observer((item: IWishListItem) => {
  const editItem = useObservable({
    isEditingItem: false,
    toggleIsEditingItem() {
      console.log('Clicked');
      return (isEditingItem = !isEditingItem);
    }
  });
  //const [isEditingItem, setIsEditingItem] = useState(false);
  //const editItem = () => setIsEditingItem(!setIsEditingItem);
  const itemEditComponent = (item: IWishListItem) => {
    //return console.log('ItemEdit called', { ...(item as IWishListItem) });
    return <WishListItemEdit {...item as IWishListItem} />;
  };

  let { isEditingItem, toggleIsEditingItem } = editItem;

  return isEditingItem === true ? (
    itemEditComponent(item)
  ) : (
    <li className="item">
      {item.image && <img src={item.image} />}
      <h3>{item.name}</h3>
      <span>{item.price}</span>
      <button onClick={toggleIsEditingItem}>Edit</button>
    </li>
  );
});

export default WishListItemView;
