var React = require('react')

function Intro(props) {
		return (
      <div>
        <div className="intro text">
          {props.text}
        </div>
        <hr />
      </div>
		)
}

module.exports = Intro
