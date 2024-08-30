import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetIngredients = () =>
    useQuery({
        queryKey: ['ingredients'],
        queryFn: async () => axios.get('/api/ingredient'),
        select: res => Object.values(res.data).map(ingredient => ({ name: ingredient.name.toLowerCase(), category: ingredient.category })),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })