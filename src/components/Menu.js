var React = require('react')
var NavLink = require('React-router-dom').NavLink;

function Menu(props) {
		return (
      <nav className="navigation column" role="navigation">
        <ul className="menu">
          { props.items.map(function(item) {
            return (
              <li className="menu-item" key={item.uri}>
                <NavLink to={'/' + item.uri} activeClassName="is-active">{item.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
		)
}

module.exports = Menu
