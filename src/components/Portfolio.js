import { useState } from "react";
import PropTypes from 'prop-types';
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

function Portfolio({ projects }) {
	const [projectList, setProjectList] = useState(projects);
	const [selected, setSelectedFilter] = useState("All");

	const handleSelectFilter = (filter) => {
		const newFilter = filter;
		const newProjectList = projects.filter(project => project.category === filter || filter === "All");
		setSelectedFilter(newFilter);
		setProjectList(newProjectList);
	};

	return (
		<>
			<Toolbar 
				filters={["All", "Websites", "Flayers", "Business Cards"]}
				selected={selected}
				onSelectFilter={handleSelectFilter}
			/>
			<ProjectList 
				projects={projectList}
			/>
		</>
	)
}

Portfolio.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			img: PropTypes.string,
			category: PropTypes.string
		})
	).isRequired
}

export default Portfolio;