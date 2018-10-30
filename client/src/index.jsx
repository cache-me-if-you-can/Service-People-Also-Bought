import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Carousel from './components/carousel.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: [],
    };
  }
  componentDidMount() {
    fetch('/api')
    .then(response => response.json())
    .then(data => this.setState({stocks: data}));
  }

  render() {
<<<<<<< HEAD
    console.log(this.state)
=======
    const name = this.state.name;
    const rating = this.state.stocks[0].rating;
    const ratingBlurb = this.state.stocks[0].ratingBlurb;
    const price = this.state.stocks[0].price;
    const priceChange = this.state.stocks[0].priceChange;

>>>>>>> 0c6cd2495de0d167c0883630cebc32ced978851d
    return (
      <div>
        <div>Hello From React</div>
        <Carousel stocks={this.state.stocks} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
