import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li key={restaurant.id}>
          <span>{restaurant.text}</span>
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
