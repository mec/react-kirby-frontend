var React = require('react');


var Intro = require('../components/Intro')

var api = require('../utilities/api')
var Kirbytext = require('../utilities/Kirbytext')

class Project extends React.Component {
 
  constructor(props) {
    super (props);
    this.state = {
      page: {},
      content: {},
      images: []
    };
  }

  componentDidMount() {
    api.getPage('projects/' + this.props.match.params.pageName)
      .then( function(page) {
          page.content.text = Kirbytext.convert(page.content.text)
          this.setState ( function() {
            return {
              page: page,
              content: page.content,
              images: page.images.originals
            }
          })
      }.bind(this))
  }

  render() {
    return (
      <main className="main" role="main">
        
        <header className="wrap">
          <h1>{this.state.content.title}</h1>
          <div className="intro text">
            {this.state.content.year}
          </div>
          <hr />
        </header>
        
        <div className="text wrap">
          
          <div dangerouslySetInnerHTML={{__html: this.state.content.text}}></div>

          {this.state.images.map(function(image) {
            return (
                <figure key={image.hash}>
                 <img src={image.url} alt="" />
                </figure>
              )
          })}
        </div>
      </main>

    )
  }
}

module.exports = Project
