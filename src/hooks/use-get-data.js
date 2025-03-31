import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getApiCall = (type, id, option = {}) => axios.get('/api/data?type=' + type + (id ? '&id=' + id : ''), option)

export const useGetData = (type, id) =>
    useQuery({
        queryKey: ['getData', type, id],
        queryFn: ({ signal }) => {
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();

            const response = getApiCall(type, id, {
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

export const getAsyncData = (type, id) => getApiCall(type, id);