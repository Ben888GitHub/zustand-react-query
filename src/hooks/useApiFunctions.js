import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useZustand } from '../state/ZustandInDepth';

// const {fetchPosts, fetchItems} = useZustand();

const useFetchPosts = () => {
	const { fetchPosts } = useZustand();
	// console.log(fetchPosts);
	return useQuery('posts', fetchPosts, {
		refetchOnWindowFocus: false,

		keepPreviousData: true
	});
};

const useFetchItems = () => {
	const { fetchItems } = useZustand();

	return useQuery('items', fetchItems, {
		refetchOnWindowFocus: false
		// refetchOnMount: false
	});
};

const useAddItem = () => {
	const queryClient = useQueryClient();
	const { addItem } = useZustand();

	const mutation = useMutation((itemValue) => addItem(itemValue), {
		onSuccess: (newItem) => {
			queryClient.setQueryData('items', (oldItem) => [...oldItem, newItem]);
		}
	});
	return { mutation };
};

export { useFetchPosts, useFetchItems, useAddItem };
