import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      restaurantId: this.props.restaurantId
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input 
          type='text'
          name='text'
          value={this.state.text}
          onChange={this.handleOnChange}
          />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
