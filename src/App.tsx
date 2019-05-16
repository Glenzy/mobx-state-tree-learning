import React, { Component } from 'react';
import WishListContainer from './components/WishListContainer';
import initialState from './mockAPI/initialState'
import logo from './logo.svg';
import './App.css';

import { WishList, IWishList } from './models/wishList';

export const wishList = WishList.create(initialState())

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
