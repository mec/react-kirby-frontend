var React = require('react');


var Intro = require('../components/Intro')
var Showcase = require('../components/Showcase')

var api = require('../utilities/api')
var Kirbytext = require('../utilities/Kirbytext')

class Projects extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      page: {},
      projects: [],
    };
  }

  componentDidMount() {
    api.getPage('projects')
      .then( function(page) {
          page.content.text = Kirbytext.convert(page.content.text)
          this.setState ( function() {
            return {
              page: page.content,
              projects: page.children
            }
          })
      }.bind(this))
  }

  render() {
    return (
      <main className="main" role="main">

        <header className="wrap">
          <h1>{this.state.page.title}</h1>
          <div className="text wrap" dangerouslySetInnerHTML={{__html: this.state.page.text}}>
          </div>
          <hr />
        </header>
          
        <div className="wrap wide">    
          <Showcase projects={this.state.projects} />
        </div>

      </main>

    )
  }
}

module.exports = Projects
