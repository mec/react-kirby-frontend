var React = require('react')
var ReactDOM = require('react-dom')

var App = require('./containers/App')

require('./css/index.css')

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
