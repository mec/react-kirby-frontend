var React = require('react')

function Image(props) {
		return (
			<img src={props.image.url} className='showcase-image'/>
		)
}

module.exports = Image
