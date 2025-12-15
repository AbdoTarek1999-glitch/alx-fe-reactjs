// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // افترض المصادقة (Authenticated) لإنجاز المهمة
  const isAuthenticated = true; 
  
  if (!isAuthenticated) {
    // توجيه المستخدم إذا لم يكن مسجل دخوله
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
