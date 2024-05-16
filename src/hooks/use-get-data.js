import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetData = (type, id) =>
    useQuery({
        queryKey: ['getData', type, id],
        queryFn: ({ signal }) => {
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();

            const response = axios.get('/api/data?type=' + type + (id ? '&id=' + id : ''), {
                // Pass the source token to your request
                cancelToken: source.token,
            })

            // Cancel the request if React Query signals to abort
            if (signal) {
                signal.addEventListener('abort', () => {
                    source.cancel('Query was cancelled by React Query')
                });
            }

            return response;
        },
        select: res => res.data,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
