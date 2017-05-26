var React = require('React');

var Home = require('./Home.js')
var Header = require('./Header')
var Footer = require('./Footer')

var api = require('../utilities/api')
var Site = require('../utilities/Site')

class App extends React.Component {

	constructor(props) {
    super (props);
    this.state = {
      routes: null,
    };
  }

	componentDidMount() {
		api.getPage('menu')
			.then( function(page) {
					this.setState ( function() {
						//page.content.text = marked.render(page.content.text)
						return {
							routes: page
						}
					})
			}.bind(this))
	}

	render() {
		return (
			<div>
			{!this.state.routes ? <p>Loading</p> : <Site routes={this.state.routes} /> }
			</div>
		)
	}
}

module.exports = App
