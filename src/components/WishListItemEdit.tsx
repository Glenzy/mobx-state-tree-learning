import React, { ReactEventHandler } from 'react';
import { IWishListItem } from '../models/wishList';
import { observer } from 'mobx-react';

interface IItemEdit {
  item: IWishListItem;
  toggleIsEditingItem: ReactEventHandler;
  onSaveEdit: () => void;
}

const WishListItemEdit: React.FC<IItemEdit> = observer(props => {
  const { item, toggleIsEditingItem, onSaveEdit } = props;
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changeName', event.target.value);
    item.changeName(event.target.value);
  };
  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseFloat(event.target.value);
    return isNaN(price) != false ? item.changePrice(price) : false;
  };
  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    item.changeImage(event.target.value);
  };

  return (
    <>
      {console.log('should be rendered', item)}
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
});

export default WishListItemEdit;
