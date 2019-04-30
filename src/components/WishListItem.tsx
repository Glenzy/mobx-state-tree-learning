import React, { Component, ReactEventHandler } from 'react';
import { observer } from 'mobx-react';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

import { IWishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';

interface IItem {
  item: IWishListItem;
  clone?: IWishListItem;
  isEditingItem?: boolean;
  id: number;
}
class WishListItemView extends Component<IItem> {
  state = {
    isEditingItem: false,
    item: this.props.item,
    clone: null
  };
  onEditItem = () => {
    return this.setState({
      isEditingItem: !this.state.isEditingItem,
      clone: clone(this.props.item)
    });
  };

  onSaveEdit = () => {
    applySnapshot(this.props.item, getSnapshot(this.state.item));
  };

  itemEditComponent: React.FC<IItem> = props => (
    <WishListItemEdit
      clone={this.state.clone ? this.state.clone : this.state.item}
      toggleIsEditingItem={this.onEditItem}
      onSaveEdit={this.onSaveEdit}
    />
  );

  render() {
    const { isEditingItem, item, clone } = this.state;

    return isEditingItem === true ? (
      this.itemEditComponent({ clone, isEditingItem } as IItem)
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
