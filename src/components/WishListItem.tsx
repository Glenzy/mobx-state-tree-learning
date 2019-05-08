import React, { Component, ReactEventHandler } from 'react';
import { observer } from 'mobx-react';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

import { IWishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';

interface IItem {
  item: IWishListItem;
  isEditingItem?: boolean;
  id: number;
}
class WishListItemView extends Component<IItem> {
  state = {
    isEditingItem: false,
    item: this.props.item,
    clone: clone(this.props.item)
  };
  onEditItem = () => {
    return this.setState({
      isEditingItem: !this.state.isEditingItem,
      clone: clone(this.props.item)
    });
  };

  onSaveEdit = () => {
    applySnapshot(this.props.item, getSnapshot(this.state.clone));
    return this.setState({
      isEditingItem: !this.state.isEditingItem,
      clone: null
    });
  };

  getEditItemComponent = () => (
    this.state.clone && <WishListItemEdit
      item={this.state.clone}
      toggleIsEditingItem={this.onEditItem}
      onSaveEdit={this.onSaveEdit}
    />
  );

  removeItem = () => this.state.item.removeItem();


  render() {
    const { isEditingItem, item } = this.state;

    return isEditingItem === true ? (
      this.getEditItemComponent()
    ) : (
        <li className="item">
          {item.image && <img src={item.image} />}
          <div className="textBox">
            <h3>{item.name}</h3>
            <span>{item.price}</span>
            <button onClick={this.onEditItem}>Edit</button>
            <button onClick={this.removeItem}>Remove</button>
          </div>
        </li>
      );
  }
}

export default observer(WishListItemView);
