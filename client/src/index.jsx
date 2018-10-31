import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Carousel from './components/carousel.jsx';
import styles from '../Styles/app.css'


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
      <div className={styles.app}>
        <Carousel stocks={this.state.stocks} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
