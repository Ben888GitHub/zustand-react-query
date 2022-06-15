import axios from 'axios';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const zustandStore = (set, get) => ({
	toads: 0,
	increaseToad: () => set(() => ({ toads: get().toads + 1 })),
	decreaseToad: () => {
		set(() => get().toads !== 0 && { toads: get().toads - 1 });
		console.log(get().toads);
	},
	posts: [],
	fetchPosts: async () => {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		set(() => ({ posts: data.slice(0, 10) }));
	},
	items: [],
	fetchItems: async () => {
		const { data } = await axios.get('http://localhost:3001/items');
		set(() => ({ items: data }));
	},
	addItem: async (item) => {
		const { data } = await axios.post('http://localhost:3001/items', item);
		set((state) => ({ items: [...state.items, data] }));
	}
});

export const useZustand = create(
	devtools(
		persist(zustandStore, {
			name: 'zustand-store',
			serialize: { options: true }
		})
	)
);
