var React = require('React')

function Image(props) {
		return (
			<img src={props.image.url} className='showcase-image'/>
		)
}

module.exports = Image
