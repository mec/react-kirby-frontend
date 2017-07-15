var React = require('react');


var Intro = require('../components/Intro')
var LatestProjects = require('../components/LatestProjects')

var api = require('../utilities/api')
var Kirbytext = require('../utilities/Kirbytext')

var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')


class Home extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      page: {},
    };
  }

  componentDidMount() {
    api.getPage('home')
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
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <main className="main" role="main" key="main">

          <header className="wrap">

            <h1 >{this.state.page.title}</h1>

                <Intro text={this.state.page.intro}/>

          </header>

          <div className="text wrap" dangerouslySetInnerHTML={{__html: this.state.page.text}}>

          </div>

          <LatestProjects key='latestProjects'/>

        </main>
        </CSSTransitionGroup>

		)
  }
}

module.exports = Home
