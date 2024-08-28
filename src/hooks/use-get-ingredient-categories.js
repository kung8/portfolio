import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetIngredientCategories = () =>
    useQuery({
        queryKey: ['ingredient-categories'],
        queryFn: async () => axios.get('/api/ingredient/category'),
        select: res => res.data,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })