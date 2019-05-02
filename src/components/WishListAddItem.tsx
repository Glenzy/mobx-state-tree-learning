import React, { Component, ReactEventHandler } from 'react';
import { observer } from 'mobx-react';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

import { IWishListItem } from '../models/wishList';
import WishListItemEdit from './WishListItemEdit';



const WishListAddItem = (item: IWishListItem) => {
    return (
        <WishListItemEdit {...item} />
    );
}

export default WishListAddItem;