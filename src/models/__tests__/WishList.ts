import { WishListItem, WishList } from '../wishList';

it('should create an instance of a model', () => {
    const item = WishListItem.create({
        "name": "The Chronicals Of Narnia - CS Lewis Box Set",
        "price": 19.99,
    });
    expect(item.price).toBe(19.99);
    expect(item.image).toBe('');
});

it('should create a WishList', () => {
    const list = WishList.create({
        items: [
            {
                name: "The Chronicals Of Narnia - CS Lewis Box Set",
                price: 19.99,
            }
        ]
    });
    expect(list.items.length).toBe(1);
    expect(list.items[0].price).toBe(19.99);
});