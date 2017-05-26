var React = require('React');

var api = require('../utilities/api')

class Images extends React.Component {

	constructor(props) {
    super (props);
    this.state = {
      images: null,
    };
  }

	componentDidMount() {
		api.getFiles('projects', this.props.projectUri)
			.then( function(images) {
					this.setState ( function() {
						return {
							images: images
						}
					})
			}.bind(this))
	}

	renderImage() {

		if ( this.state.images ) {
			let thumbUri = 'http://localhost:8000/thumbs/' + this.props.projectUri + '/' + this.state.images[0].name + '-600x600.' + this.state.images[0].extension
			return (
				<img src={thumbUri} />
			)
		} else {
			return (
				<img src="http://placehold.it/600x600"/>
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
