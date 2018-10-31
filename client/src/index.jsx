import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Carousel from './components/carousel.jsx';


class App extends React.Component {
  constructor(props) {
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
    console.log(this.state);
    return (
      <div>
        <div>Hello From React</div>
        <Carousel stocks={this.state.stocks} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
