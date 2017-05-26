var React = require('React')
var ReactDOM = require('React-dom')

var App = require('./containers/App')

require('./css/index.css')

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
