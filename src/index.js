import React from 'react';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';

import './index.css';
// import { ReactQueryDevtools } from "@tanstack/react-query/devtools";
const queryClient = new QueryClient();

// const environment = process.env.NODE_ENV;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {/* {environment !== 'production' && <ReactQueryDevtools initialIsOpen={false} />} */}
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </HashRouter>
);
