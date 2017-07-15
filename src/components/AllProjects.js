var React = require('react')
var NavLink = require('React-router-dom').NavLink;

var api = require('../utilities/api')

var Showcase = require('./Showcase')

class AllProjects extends React.Component {

	constructor(props) {
    super (props);
    this.state = {
      projects: null,
      number: 3
    };
  }

  componentDidMount() {
    api.getPage('projects')
      .then( function(res) {
          this.setState ( function() {
            return {
              projects: res.children
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
								? <img src={require('../images/loading.svg')}/>
								: <Showcase projects={this.state.projects}/> 
							}
		        <p className="projects-section-more"><NavLink to='/projects' className="btn">show all projects &hellip;</NavLink></p>
		      </div>
		      
		    </section>

		)	
	}

}

module.exports = AllProjects
