var React = require('React');

var api = require('../utilities/api')

class Images extends React.Component {

	renderImage() {

		if ( this.state.page ) {
			return (
				<img src={this.state.page.images.thumbs[0].url} />
			)
		} else {
			return (
				<img src={this.state.page.images.thumbs[0].url} />
			)
		}
	}

	render() {
		return (
			<div>
				{this.renderImage()}
			</div>
		)
	}
}

module.exports = Images
