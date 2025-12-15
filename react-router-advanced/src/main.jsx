import React from 'react';
import ReactDOM from 'react-dom/client';
// 💡 استيراد RouterProvider وكائن الراوتر
import { RouterProvider } from 'react-router-dom'; 
import router from './router.jsx'; // استيراد كائن الراوتر

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 💡 استخدام RouterProvider هو النقطة الوحيدة التي تحتاج للراوتر */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
);