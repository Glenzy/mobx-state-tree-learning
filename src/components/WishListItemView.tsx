import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

import { IWishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';
import { render } from 'react-dom';

class WishListItemView extends Component<boolean, IWishListItem, {}> {
  constructor(props: IWishListItem) {
    super(props);
    this.state = {
      isEditingItem: false,
      item: props
    };
  }

  itemEditComponent = (item: IWishListItem) => (
    <WishListItemEdit item={...item} toggleIsEditingItem={} />
  );

  render() {
    const { isEditingItem, item } = this.state;

    return isEditingItem === true ? (
      this.itemEditComponent(item)
    ) : (
      <li className="item">
        {item.image && <img src={item.image} />}
        <div className="textBox">
          <h3>{item.name}</h3>
          <span>{item.price}</span>
          <button onClick={toggleIsEditingItem}>Edit</button>
        </div>
      </li>
    );
  }
}

export default observer(WishListItemView);
