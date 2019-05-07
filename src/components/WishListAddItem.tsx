import React, { Component, ReactEventHandler } from 'react';

import { IWishListItem, WishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';
import { wishList } from '../App';

//move to external interface declaration as it's used in multiple areas
interface IAddItem {
    item: IWishListItem;
}

class WishListAddItem extends Component<IAddItem>{
    state = {
        item: WishListItem.create({
            name: '',
            price: 0,
            image: ''
        })
    }
    onAddItem = () => {
        wishList.addItem(this.state.item as IWishListItem)
        this.setState({
            newItem: WishListItem.create({
                name: '',
                price: 0,
                image: ''
            })
        })
    }
    render() {
        const { item } = this.props
        return (
            <>
                <WishListItemEdit item={item} onSaveEdit={this.onAddItem} />
                <button onClick={this.onAddItem}>Add item</button>
            </>
        );
    }

}

export default WishListAddItem;