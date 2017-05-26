var React = require('React')
var NavLink = require('react-router-dom').NavLink;

function Title(props) {
		return (
          <div className="branding column">
              <NavLink to='/'>{props.title}</NavLink>
          </div>
		)
}

module.exports = Title
