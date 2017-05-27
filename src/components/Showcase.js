let React = require('React')

let NavLink = require('react-router-dom').NavLink;

let Image = require('./Image')

function Showcase(props) {
		return (
			<ul className="showcase grid gutter-1">
				{props.projects.map(function(project) {
					return (
						<li className="showcase-item column" key={project.hash}>
					        <NavLink to={'/' + project.uri} className="showcase-link">
					           	<Image image={project.images.thumbnails[0]}/>
					          	<div className="showcase-caption">
					            	<h3 className="showcase-title">{project.content.title}</h3>
					          	</div>
					        </NavLink>
					  	</li>
				    )
				})}
			</ul>
		)
}

module.exports = Showcase
