import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetRecipeCategories = () =>
    useQuery({
        queryKey: ['recipe-categories'],
        queryFn: async () => axios.get('/api/recipe/category'),
        select: res => res.data,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
