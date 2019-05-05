import React, { ReactEventHandler } from 'react';
import { IWishListItem } from '../models/wishList';
import { observer } from 'mobx-react';

interface IItemEdit {
  item: IWishListItem;
  toggleIsEditingItem: ReactEventHandler;
  onSaveEdit: ReactEventHandler;
}

const WishListItemEdit: React.FC<IItemEdit> = ({ item, toggleIsEditingItem, onSaveEdit }: IItemEdit) => {
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    item.changeName(event.target.value);
  };
  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseFloat(event.target.value);
    console.log('price', price);
    return isNaN(price) === false ? item.changePrice(price) : false;
  };
  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    item.changeImage(event.target.value);
  };

  return (
    <>
      <label htmlFor="name">
        Name:{' '}
        <input
          id="name"
          type="text"
          name="name"
          onChange={onChangeName}
          value={item.name}
        />
      </label>
      <label htmlFor="price">
        Price:{' '}
        <input
          id="price"
          type="number"
          name="price"
          onChange={onChangePrice}
          value={item.price}
        />
      </label>
      +
      <label htmlFor="image">
        Image URL:{' '}
        <input
          id="image"
          type="text"
          name="image"
          onChange={onChangeImage}
          value={item.image}
        />
      </label>
      <button onClick={toggleIsEditingItem}>Cancel</button>
      <button onClick={onSaveEdit}>Save</button>
    </>
  );
};

export default observer(WishListItemEdit);
