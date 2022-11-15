import PropTypes from 'prop-types';

function Toolbar({ filters, selected, onSelectFilter }) {
	return (
		<div className="toolbar">
			{
				filters.map((filter, idx) => 
					<button 
						className={filter === selected ? "filter-btn selected" : "filter-btn"}
						key={filter} 
						onClick={() => onSelectFilter(filter)} 
					>
						{filter}
					</button>
				)
			}
		</div>
	)
}

Toolbar.propTypes = {
	filters: PropTypes.arrayOf(PropTypes.string).isRequired,
	selected: PropTypes.string.isRequired,
	onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar;