var React = require('React');


var Intro = require('../components/Intro')
var LatestProjects = require('../components/LatestProjects')

var api = require('../utilities/api')
var Kirbytext = require('../utilities/Kirbytext')

class Blog extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      page: {},
    };
  }

  componentDidMount() {
    api.getPage('blog')
      .then( function(page) {
          this.setState ( function() {
            page.content.text = Kirbytext.convert(page.content.text)
            return {
              page: page.content
            }
          })
      }.bind(this))
  }

  render() {
    return (
        <main className="main" role="main">

          <header className="wrap">
            <h1>{this.state.page.title}</h1>
            <Intro text={this.state.page.intro}/>
          </header>

          <div className="text wrap" dangerouslySetInnerHTML={{__html: this.state.page.text}}>

          </div>

        </main>

    )
  }
}

module.exports = Blog
