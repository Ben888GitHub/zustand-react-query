import './App.css';
import { useStore } from './state/ZustandBasic';
import { useState } from 'react';
import MoreOnZustand from './components/MoreOnZustand';

function App() {
	const {
		bears,
		increasePopulation,
		decreasePopulation,
		todos,
		addTodo,
		deleteAllZustandStores,
		removeAllBears,
		deleteAllTodos,
		deleteTodo
	} = useStore();

	const initialTodo = { id: null, todo_name: '', todo_description: '' };
	const [todo, setTodo] = useState(initialTodo);

	const handleSetTodo = (e) => {
		setTodo({
			...todo,
			[e.target.name]: e.target.value,
			id: todos.length + 1
		});
	};

	const handleAddTodo = () => {
		addTodo(todo);
		setTodo({ ...initialTodo });
	};

	return (
		<div className="App">
			<h1>Zustand Staste Management</h1>
			<br />
			<h2>{bears} Bears around here...</h2>
			<br />
			<button onClick={increasePopulation}>add bear</button>
			<br />
			<button onClick={decreasePopulation}>reduce bear</button>
			<br />
			<button onClick={removeAllBears}>delete all bears</button>
			<br />
			<br />
			<input
				type="text"
				placeholder="todo-name"
				name="todo_name"
				value={todo?.todo_name}
				onChange={handleSetTodo}
			/>
			<input
				type="text"
				placeholder="todo-description"
				name="todo_description"
				value={todo?.todo_description}
				onChange={handleSetTodo}
			/>
			<button onClick={handleAddTodo}>Add todo</button>
			{todos &&
				todos.map((todo, index) => (
					<div key={index}>
						<p>{todo?.todo_name}</p>
						<p>{todo?.todo_description}</p>
						<button onClick={() => deleteTodo(todo.id)}>
							Delete {todo?.todo_name}
						</button>
					</div>
				))}
			<br />
			<button onClick={deleteAllTodos}>Delete all todos</button>
			<br />
			<br />
			<button onClick={deleteAllZustandStores}>
				Delete all zustand stores
			</button>
			<br />
			<br />
			<MoreOnZustand />
		</div>
	);
}

export default App;
