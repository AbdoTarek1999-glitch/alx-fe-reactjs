// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 💡 يمكنك استخدام منطق مصادقة حقيقي هنا، لكن للمهمة سنفترض تسجيل الدخول
  const isAuthenticated = true; 
  
  if (!isAuthenticated) {
    // إذا لم يكن مسجل دخوله، يتم تحويله إلى الصفحة الرئيسية
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
