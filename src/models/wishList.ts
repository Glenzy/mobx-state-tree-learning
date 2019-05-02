import { types, Instance, getParent, destroy } from 'mobx-state-tree';
import { entries } from 'mobx';

const data = {
  name: 'The Chronicals Of Narnia - CS Lewis Box Set',
  price: 19.99,
  image:
    'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9780007528097/0000/the-chronicles-of-narnia-the-chronicles-of-narnia-boxed-set.jpg'
};

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: ''
  })
  .actions(self => ({
    changeName(newName: string) {
      self.name = newName;
    },
    changePrice(newPrice: number) {
      self.price = newPrice;
    },
    changeImage(newImage: string) {
      self.image = newImage;
    },
    removeItem() {
      (getParent(self, 2) as IWishList).removeItem(self as IWishListItem);
    }
  }));



export type IWishListItem = Instance<typeof WishListItem>;

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    addItem: (item: { name: string; price: number; image?: '' }) => self.items.push(item),
    removeItem: (item: IWishListItem) => destroy(item)

  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum: any, entry: any) => sum + entry.price, 0);
    }
  }));
export type IWishList = Instance<typeof WishList>;
