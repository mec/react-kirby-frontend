var React = require('React')
var NavLink = require('react-router-dom').NavLink;

var api = require('../utilities/api')

var Showcase = require('./Showcase')

class LatestProjects extends React.Component {

	constructor(props) {
    super (props);
    this.state = {
      projects: null,
    };
  }

  componentDidMount() {
    api.getChildren('projects')
      .then( function(res) {
          this.setState ( function() {
            return {
              projects: res.slice(0,3)
            }
          })
      }.bind(this))
  }

	render() {
		return (
			<section className="projects-section">
		      
		      <div className="wrap wide">
		        <h2>Latest Projects</h2>
		        	{!this.state.projects 
								? <h1>Loading Projects</h1> 
								: <Showcase projects={this.state.projects}/> 
							}
		        <p className="projects-section-more"><NavLink to='/projects' className="btn">show all projects &hellip;</NavLink></p>
		      </div>
		      
		    </section>

		)	
	}

}

module.exports = LatestProjects
