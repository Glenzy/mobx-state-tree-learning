import { getSnapshot, onSnapshot } from 'mobx-state-tree';
import { reaction } from 'mobx';

import { WishListItem, WishList } from '../wishList';

function crateWishList() {
    const list = WishList.create({
        items: [
            {
                name: "The Chronicals Of Narnia - CS Lewis Box Set",
                price: 19.99,
            }
        ]
    });

    return list
}

it('should create an instance of a model', () => {
    const item = WishListItem.create({
        "name": "The Chronicals Of Narnia - CS Lewis Box Set",
        "price": 19.99,
    });
    expect(item.price).toBe(19.99);
    expect(item.image).toBe('');
});

it('should create a WishList', () => {
    const list = crateWishList();
    expect(list.items.length).toBe(1);
    expect(list.items[0].price).toBe(19.99);
});


it('should change the item name', () => {
    const list = crateWishList();
    list.items[0].changeName("Moo");
    expect(getSnapshot(list)).toMatchSnapshot()
})


it('should change the item price', () => {
    const list = crateWishList();
    list.items[0].changePrice(21.00);
    expect(getSnapshot(list)).toMatchSnapshot()
})


it('should add a new item and update price', () => {
    const list = crateWishList();
    const states: [] = [];
    onSnapshot(list, (snapshot: never) => {
        states.push(snapshot);
    })

    list.addItem({
        name: "The Game Of Thrones Ninja Edition",
        price: 21.99
    })
    list.items[1].changePrice(22.00);

    expect(getSnapshot(list)).toMatchSnapshot()
    expect(states).toMatchSnapshot()
})

it('can calculate the total price of the list', () => {
    const list = crateWishList();
    list.addItem({
        name: "The Game Of Thrones Ninja Edition",
        price: 21
    })
    list.addItem({
        name: "Ninjas Will Take Your Lunch",
        price: 100
    })

    expect(list.totalPrice).toBe(140.99);
})

it('will not mutate other values', () => {
    const list = crateWishList();
    list.addItem({
        name: "The Game Of Thrones Ninja Edition",
        price: 21
    })
    list.addItem({
        name: "Ninjas Will Take Your Lunch",
        price: 100
    })
    let changed: number = 0;
    reaction(() => list.totalPrice, () => changed++);
    list.items[0].changeImage('http://some-image-url.com/images/image');
    list.items[1].changeName('Game Of Thrones - Winter is Coming');
    expect(changed).toBe(0);
    list.items[1].changePrice(500);
    expect(changed).toBe(1);
})