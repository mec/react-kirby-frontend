var React = require('React')

var Images = require('./Images')

function Showcase(props) {
		return (
			<ul className="showcase grid gutter-1">
				{props.projects.map(function(project) {
					return (
						<li className="showcase-item column" key={project.hash}>
			        <a href={'/' + project.uri} className="showcase-link">
		           	<Images projectUri={project.uri}/>
		          	<div className="showcase-caption">
		            	<h3 className="showcase-title">{project.content.title}</h3>
		          	</div>
			        </a>
				  	</li>
			    )
				})}
			</ul>
		)
}

module.exports = Showcase
