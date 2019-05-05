import React, { Component, ReactEventHandler } from 'react';
import { observer } from 'mobx-react';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

import { IWishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';

//move to external interface declaration as it's used in multiple areas
interface IItemEdit {
    item: IWishListItem;
    toggleIsEditingItem: ReactEventHandler;
    onSaveEdit: ReactEventHandler;
}

const WishListAddItem: React.FC<IItemEdit> = ({ item, toggleIsEditingItem, onSaveEdit }: IItemEdit) => {
    return (
        <WishListItemEdit item={item} toggleIsEditingItem={toggleIsEditingItem} onSaveEdit={onSaveEdit} />
    );
}

export default WishListAddItem;