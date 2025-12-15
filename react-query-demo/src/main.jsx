import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

const queryClient = new QueryClient(); // إنشاء العميل

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* يجب أن يكون الإعداد هنا إذا لم يكن في App.jsx */}
    <QueryClientProvider client={queryClient}> 
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
