import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

// دالة تحقق المصادقة (تعتمد على localStorage)
const isAuthenticated = () => {
    return localStorage.getItem('authToken') === 'true'; 
};

const PrivateRoute = () => {
    // إذا كان مصادقاً، اعرض المكون المتداخل (Outlet)
    // وإلا، قم بإعادة التوجيه إلى صفحة تسجيل الدخول
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;