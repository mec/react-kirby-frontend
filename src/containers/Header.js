var React = require('React')

var Title = require('../components/Title')
var Menu = require('../components/Menu')

function Header(props) {
		return (
      <header className="header wrap wide" role="banner">
        <div className="grid">
          <Title title='Kirby Starterkit'/>
          <Menu items={props.pages}/>
        </div>
      </header>
		)
}

module.exports = Header
