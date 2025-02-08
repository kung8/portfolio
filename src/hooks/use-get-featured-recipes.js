import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetFeaturedRecipes = () =>
    useQuery({
        queryKey: ['featured-recipes'],
        queryFn: async () => axios.get('/api/recipe/featured'),
        select: res => res.data,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
