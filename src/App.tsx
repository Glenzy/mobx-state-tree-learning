import React, { Component } from 'react';
import WishListContainer from './components/WishListContainer';
import logo from './logo.svg';
import './App.css';

import { WishList, IWishList } from './models/wishList';

export const wishList = WishList.create({
  items: [
    {
      name: 'LEGO Mindstorms EV3',
      price: 349.95,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg'
    },
    {
      name: 'Miracles - C.S. Lewis',
      price: 12.91,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg'
    }
  ]
});

class App extends Component<IWishList | {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WishListContainer {...wishList} />
        </header>
      </div>
    );
  }
}

export default App;
