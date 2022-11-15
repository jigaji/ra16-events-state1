import PropTypes from 'prop-types';

function ProjectList({ projects }) {
	return (
		<div className="project-list">
			{
				projects.map((project, idx) => 
					<img 
						className="project-img" 
						key={idx}
						src={project.img}
						alt="project-img"
					/>
				)
			}
		</div>
	)
}

ProjectList.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			img: PropTypes.string,
			category: PropTypes.string
		})
	).isRequired
}

export default ProjectList;