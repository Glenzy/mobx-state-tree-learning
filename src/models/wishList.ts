import { types } from 'mobx-state-tree';

const data = {
    "name": "The Chronicals Of Narnia - CS Lewis Box Set",
    "price": 19.99,
    "image": "https://www.booktopia.com.au/http_coversbooktopiacomau/big/9780007528097/0000/the-chronicles-of-narnia-the-chronicles-of-narnia-boxed-set.jpg"
}

export const WishListItem = types.model({
    'name': types.string,
    'price': types.number,
    'image': ''
});

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), [])
});