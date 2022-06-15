import { useZustand } from '../state/ZustandInDepth';
import { useEffect, useState } from 'react';
function MoreOnZustand() {
	const {
		toads,
		increaseToad,
		decreaseToad,
		posts,
		fetchPosts,
		items,
		fetchItems,
		addItem
	} = useZustand();

	useEffect(() => {
		posts && fetchPosts();
		items && fetchItems();
	}, []);

	const [value, setValue] = useState({
		name: '',
		description: ''
	});

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value
		});
	};

	const handleAddItem = () => {
		addItem(value);
	};

	return (
		<div>
			<h2>There are {toads} toads in this waterfall</h2>
			<button onClick={increaseToad}>Add toad</button>
			<br />
			<button onClick={decreaseToad}>Reduce toad</button>
			<br />
			<br />
			{posts &&
				posts?.map((post, index) => (
					<div key={index}>
						<p>{post.title}</p>
						<p>{post.body}</p>
						<br />
					</div>
				))}
			<br />
			<br />
			<select name="name" id="name" value={value.name} onChange={handleChange}>
				<option value="">Your Tool's Name</option>
				<option value="GraphQL">GraphQL</option>
				<option value="Zustand">Zustand</option>
				<option value="Supabase">Supabase</option>
				<option value="MongoDB">MongoDB</option>
			</select>
			<br />
			<select
				name="description"
				id="description"
				value={value.description}
				onChange={handleChange}
			>
				<option value="">Your Tool's Description</option>
				<option value="API Query Engine">API Query Engine</option>
				<option value="State Management Library for all Apps">
					State Management Library for all App
				</option>
				<option value="One of the best BAAS">One of the best BAAS</option>
				<option value="NoSQL Database">NoSQL Database</option>
			</select>
			<br />
			<button onClick={handleAddItem}>Add Tool</button>
			<br />
			{items &&
				items?.map((item, index) => (
					<div key={index}>
						<p>{item.name}</p>
						<p>{item.description}</p>
						<br />
					</div>
				))}
		</div>
	);
}

export default MoreOnZustand;
