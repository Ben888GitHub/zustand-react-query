import create from 'zustand';

export const useStore = create((set) => ({
	bears: 0,
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	decreasePopulation: () => {
		set((state) => state.bears !== 0 && { bears: state.bears - 1 });
		set((state) => console.log(state.bears));
	},
	removeAllBears: () => set(() => ({ bears: 0 })),
	todos: [],
	addTodo: (todo) => {
		set((state) => ({ todos: [...state.todos, todo] }));
		set((state) => console.log(state.todos));
	},
	deleteTodo: (id) => {
		set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
		set((state) => console.log(state.todos));
	},
	deleteAllZustandStores: () => set({}, true),
	deleteAllTodos: () => set(() => ({ todos: [] }))
}));
