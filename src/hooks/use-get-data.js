import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetData = (type, id) =>
    useQuery({
        queryKey: ['getData', type, id],
        queryFn: async () => axios.get('/api/data?type=' + type + (id ? '&id=' + id : '')),
        select: res => res.data,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
