import React, { Component } from 'react';

import 'bootstrap';
import "./App.css";
import Navbar from './components/navbar';
import Stores from './components/stores';
import Product from './components/product';


class App extends Component {



  render() {

    return (
      <>

        <Navbar />
        <div className='container'>
        
          <hr />
          <div className='row'>
            <Stores/>
            <Product/>

          </div>
        </div>

      

      </>
    );
  }
}

export default App;
