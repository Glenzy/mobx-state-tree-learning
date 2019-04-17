import React, { Component, ReactEventHandler } from 'react';
import { observer } from 'mobx-react';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

import { IWishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';
import { render } from 'react-dom';

interface IItem {
  item: IWishListItem;
  isEditingItem?: boolean;
  id: number;
}
class WishListItemView extends Component<IItem> {
  state = {
    isEditingItem: false,
    item: this.props.item
  };
  onEditItem = () => {
    return this.setState({ isEditingItem: !this.state.isEditingItem });
  };

  itemEditComponent: React.FC<IItem> = props => (
    <WishListItemEdit {...props} toggleIsEditingItem={this.onEditItem} />
  );

  render() {
    const { isEditingItem, item } = this.state;

    return isEditingItem === true ? (
      this.itemEditComponent({ ...this.state } as IItem)
    ) : (
      <li className="item">
        {item.image && <img src={item.image} />}
        <div className="textBox">
          <h3>{item.name}</h3>
          <span>{item.price}</span>
          <button onClick={this.onEditItem}>Edit</button>
        </div>
      </li>
    );
  }
}

export default observer(WishListItemView);
