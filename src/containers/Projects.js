var React = require('React')
var Kirbytext = require('../utilities/Kirbytext')

const Showcase = require('../components/Showcase')

function Projects(props) {
		return (
      <main className="main" role="main">

        <header className="wrap">
          <h1>{props.pageData.content.title}</h1>
          <div className="intro text" dangerouslySetInnerHTML={{__html: Kirbytext.convert(props.pageData.content.text)}}>
          </div>
          <hr />
        </header>
          
        <div className="wrap wide">  
          <Showcase />
        </div>

      </main>
		)
}

module.exports = Projects
