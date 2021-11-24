const Person = props => {
	let resp = props.age >= 18 ? "please go vote!" : "you must be 18";
	let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

	if (props.name.length > 8) {
		props.name = props.name.slice(0, 6);
	}
	return (
		<div>
			<p>Learn some information about this person.</p>
			<h3>
				{props.name}, {props.age} years old
			</h3>
			<h3>{resp}</h3>
			<ul>
				<li>{hobbies}</li>
			</ul>
		</div>
	);
};
