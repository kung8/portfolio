import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetIngredientCategories = () =>
    useQuery({
        queryKey: ['ingredient-categories'],
        queryFn: async () => axios.get('/api/ingredient/category'),
        select: res => Object.values(res.data),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })