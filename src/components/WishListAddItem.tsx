import React, { Component, ReactEventHandler } from 'react';

import { IWishListItem, WishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';
import { wishList } from '../App';

interface IState {
    item?: IWishListItem;
}
class WishListAddItem extends Component<IState>{
    state = {
        item: WishListItem.create({
            name: '',
            price: 0,
            image: ''
        })
    }
    onAddItem = () => {
        const { item } = this.state
        wishList.addItem(item)
        this.setState({
            newItem: WishListItem.create({
                name: '',
                price: 0,
                image: ''
            })
        })
    }
    render() {
        const { item } = this.state
        return (
            <>
                <WishListItemEdit item={item} onSaveEdit={this.onAddItem} />
                <button onClick={this.onAddItem}>Add item</button>
            </>
        );
    }

}

export default WishListAddItem;