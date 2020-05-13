import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };
  }

  renderContent = () => {
    const { errorMessage, lat } = this.state;
    if (errorMessage !== '') {
      return (
        <div>
          <h1>Error: {errorMessage}</h1>
        </div>
      );
    } else if (lat) {
      return <SeasonDisplay lat={lat} />;
    } else {
      return (
        <div className="loading">
          <Spinner />
        </div>
      );
    }
  };
  render = () => {
    return <div className="app-div">{this.renderContent()}</div>;
  };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setTimeout(() => {
          this.setState({ lat: position.coords.latitude });
        }, 3000);
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  };
}

ReactDOM.render(<App />, document.querySelector('#root'));
