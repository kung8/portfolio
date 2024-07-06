import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

const environment = process.env.NODE_ENV;

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {/* {environment !== 'production' && <ReactQueryDevtools initialIsOpen={false} />} */}
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
