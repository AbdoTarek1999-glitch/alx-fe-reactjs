// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // تم استيراده بشكل صحيح

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // تم استخدامه بشكل صحيح
  
  // منطق الحماية
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
