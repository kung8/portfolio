import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetData = (type) =>
    useQuery({
        queryKey: ['getData', type],
        queryFn: async () => axios.get('/api/data?type=' + type),
        select: res => res.data,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
