var React = require('react');

var ReactRouter = require('React-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


var Header = require('./Header')
var Footer = require('./Footer')

let Home = require('./Home')
let Projects = require('./Projects')
let Project = require('./Project')
let Blog = require('./Blog')
let About = require('./About')
let Contact = require('./Contact')
let Page = require('./Page')


class App extends React.Component {
	render() {
		return(
				<Router>

					<div className="container">
								<Header key="header"/>
								<Switch>
									<Route exact path="/" component={Home} key="home"/>
									<Route exact path="/projects" component={Projects} key="projects"/>
									<Route exact path="/projects/:pageName" component={Project}/>
									<Route path="/blog" component={Blog} />
									<Route path="/about" component={About} />
									<Route path="/contact" component={Contact} />

									<Route render={ function() {
											return <p>404 Not found</p>
										}} key="404"/>
								</Switch>
							<Footer />
					</div>
				</Router>
			)
	}
}

module.exports = App
