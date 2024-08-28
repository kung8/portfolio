import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetIngredients = () =>
    useQuery({
        queryKey: ['ingredients'],
        queryFn: async () => axios.get('/api/ingredient'),
        select: res => res.data,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })