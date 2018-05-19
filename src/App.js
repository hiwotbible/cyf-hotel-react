import React, { Component } from 'react';

import Bookings from './containers/Bookings.js';
import Footer from './components/Footer.js';
import Logo from "./components/Logo.js";
import BookingsMessage from './components/BookingsMessage.js';
import newBookingsMessage from "./components/newBookingsMessage.js"

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Bookings />
        <Footer />
        <BookingsMessage />
      </div>

    )

    // return (
    //   <div className="App">
    //     
    //   
    //     <BookingsMessage />
    //     
    //   </div>
    // );
  }
}

export default App;
