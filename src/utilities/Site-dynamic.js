var React = require('React')

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Home = require('../containers/Home.js')
var Header = require('../containers/Header')
var Footer = require('../containers/Footer')
var Page = require('../containers/Page')

function Site(props) {
	return (

      <Router>
        <div>
        <Header pages={props.routes}/>
            <Switch>
              <Route exact path="/" component={Home} />
              {props.routes.map(function(page) {
                return (
                <Route
                  exact path={'/' + page.uri}
                  render={() => <Page pageData={page}/>}
                  key={page.hash}
                />
                )
              })}
              <Route render={ function() {
                  return <p>404 Not found</p>
                }} />
            </Switch>
          <Footer />
          </div>
      </Router>

  )
}

module.exports = Site
