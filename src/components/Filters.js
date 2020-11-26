import '../stylesheets/Filters.scss';

const Filters = (props) => {
	const handleChangeStatus = (ev) => {
		const statusValue = ev.target.value;
		return props.handleFilterStatus(statusValue);
	};

	const handleClickGender = (ev) => {
		const genderValue = ev.target.value;
		return props.handleFilterGender(genderValue);
	};

	// Filtro para species
	const specieList = props.initialList.map((eachCharacter) => {
		/// comparar si la specie ya está en la lista y no incluirla
		return (
			<option key={eachCharacter.id} value={eachCharacter.species}>
				{eachCharacter.species}
			</option>
		);
	});

	const handleChangeSpecie = (ev) => {
		console.log('filtro por specie', ev.target.value);
	};

	const handleChangeSort = (ev) => {
		console.log('filtro por alfabetico', ev.target.checked);
		const isSort = ev.target.checked;
		return props.handleSort(isSort);
	};
	console.log(props.handleSort);

	return (
		<form className="filter">
			<fieldset className="filter__fieldset">
				<label htmlFor="status">Status: </label>
				<select
					className="filter__select"
					name="status"
					id="status"
					onChange={handleChangeStatus}
				>
					<option value="All">All</option>
					<option value="Alive">Alive</option>
					<option value="Dead">Dead</option>
					<option value="unknown">Unknown</option>
				</select>
			</fieldset>

			<fieldset className="filter__fieldset">
				<div className="filter__gender">
					<label htmlFor="All">All</label>
					<input
						type="radio"
						id="All"
						name="gender"
						value="All"
						onChange={handleClickGender}
					/>
				</div>

				<div className="filter__gender">
					<label htmlFor="Female">Female</label>
					<input
						type="radio"
						id="Female"
						name="gender"
						value="Female"
						onChange={handleClickGender}
					/>
				</div>
				<div className="filter__gender">
					<label htmlFor="Male">Male</label>
					<input
						type="radio"
						id="Male"
						name="gender"
						value="Male"
						onChange={handleClickGender}
					/>
				</div>
				<div className="filter__gender">
					<label htmlFor="unknown">Unknown</label>
					<input
						type="radio"
						id="unknown"
						name="gender"
						value="unknown"
						onChange={handleClickGender}
					/>
				</div>
			</fieldset>

			<fieldset className="filter__fieldset">
				<label htmlFor="specie">Species: </label>
				<select
					className="filter__select"
					name="specie"
					id="specie"
					onChange={handleChangeSpecie}
				>
					{specieList}
				</select>
			</fieldset>

			<fieldset className="filter__fieldset">
				<div className="filter__gender">
					<label htmlFor="sort">Sort by name</label>
					<input
						type="checkbox"
						id="sort"
						name="gender"
						value="isSort"
						onChange={handleChangeSort}
					/>
				</div>
			</fieldset>
		</form>
	);
};

export default Filters;
