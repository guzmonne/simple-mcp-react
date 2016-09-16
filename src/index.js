import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './_styles/'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <App />,
  rootEl
);

if (process.env.NODE_ENV !== 'production') {
	if (module.hot) {
	  module.hot.accept('./App', () => {
	    const NextApp = require('./App').default;
	    ReactDOM.render(
	      <NextApp />,
	      rootEl
	    );
	  });
	}
}