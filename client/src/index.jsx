import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: [{
        name: '',
        rating: 0,
        ratingBlurb: '',
        price: 0,
        priceChange: 0,
      }],
    }
    this.handleGet.bind(this);
  }
  componentDidMount() {
    this.handleGet();  
  }

  handleGet() {
    $.get('http://localhost:3007/api', (data) => console.log(data)
    )
  }

  render() {
    const name = this.state.name;
    const rating = this.state.stocks[0].rating;
    const ratingBlurb = this.state.stocks[0].ratingBlurb;
    const price = this.state.stocks[0].price;
    const priceChange = this.state.stocks[0].priceChange;

    return (
      <div>
        <div>Hello From React</div>
        <div className='name'>{name}</div>
        <div className='rating'>{rating}</div>
        <div className='ratingBlurb'>{ratingBlurb}</div>
        <div className='price'>{price}</div>
        <div className='priceChange'>{priceChange}</div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
