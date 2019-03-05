import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './components/landing/Landing.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      userProduct: '',
      userResults: []
      }
  }
  
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      userProduct: event.target.value
    },
    () => {
      axios({
        method: 'get',
        url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
        responseType: 'json',
        params: {
          format: 'json',
          product_tags: 'vegan',
          product_type: this.state.userProduct
        }
      }).then(response => {
        response = response.data;
        if (response.length === 0) {
          alert('Sorry, no products were found in this category')
        }
        this.setState({
          userResults: response
        });
      }).catch(function(error){
        alert('Server error. Try again later')
      })
    
    }
    )    
} 
  render() {
    return (
      <div className="App">
        <Landing handleChange={this.handleChange}/>

      </div>
    );
  }
}

export default App;
