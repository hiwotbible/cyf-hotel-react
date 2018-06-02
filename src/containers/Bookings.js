import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from "../components/Results.js";
import NameSearch from "../components/NameSearch.js";
//import Logo from "../components/Logo.js";
//import Bookings from "./components/Bookings.js";
// import BookingsMessage from "./components/Bookings.js"

// import Results from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };

  render() {
    console.log(FakeBookings)
    return (


      <div className="App-content">
        <div className="container">
          <p> {"There are bookings available for today's  " + new Date().toLocaleDateString()} </p>
          
          {/* <Logo /> */}
<Results results={FakeBookings}/>
          <Search search={this.search} />
          <NameSearch search={this.search} />
          {/* <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
