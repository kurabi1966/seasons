import ReactDOM from 'react-dom';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  console.log(useLocation());

  const { lat, errorMessage } = useLocation();
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = (
      <div className="loading">
        <Spinner />
      </div>
    );
  }
  return <div className="app-div">{content}</div>;
};
ReactDOM.render(<App />, document.querySelector('#root'));
