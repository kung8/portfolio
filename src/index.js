import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// const environment = process.env.NODE_ENV;
const root = createRoot(document.getElementById('root'));
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
