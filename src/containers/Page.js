var React = require('React')
var Kirbytext = require('../utilities/Kirbytext')



function Page(props) {
		return (
      <main className="main" role="main">

        <header className="wrap">
          <h1>{props.pageData.content.title}</h1>
          <div className="intro text" dangerouslySetInnerHTML={{__html: Kirbytext.convert(props.pageData.content.text)}}>
          </div>
          <hr />
        </header>
          
        <div className="wrap wide">  
          
        </div>

      </main>
		)
}

module.exports = Page
