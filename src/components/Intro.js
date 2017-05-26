var React = require('React')

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
