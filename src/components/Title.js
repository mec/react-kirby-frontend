var React = require('react')
var NavLink = require('React-router-dom').NavLink;

function Title(props) {
		return (
          <div className="branding column">
              <NavLink to='/'>{props.title}</NavLink>
          </div>
		)
}

module.exports = Title
