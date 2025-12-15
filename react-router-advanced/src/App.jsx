import { Link, Outlet } from 'react-router-dom';
import React from 'react';

// المكونات الوظيفية (للتسجيل والخروج)
const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        alert("تم تسجيل الخروج.");
        // استخدم window.location.reload() أو توجيه برنامج في إصدارات v6.4+
        window.location.reload(); 
    };
    return <button onClick={handleLogout}>تسجيل الخروج</button>;
};

function App() {
  return (
    <div>
      {/* 💡 شريط التنقل */}
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>الرئيسية</Link> 
        <Link to="/profile" style={{ marginRight: '15px' }}>الملف المحمي</Link>
        <Link to="/post/456" style={{ marginRight: '15px' }}>منشور ديناميكي</Link>
        <Link to="/login" style={{ marginRight: '15px' }}>تسجيل الدخول</Link>
        <Logout />
      </nav>
      
      <div style={{ padding: '0 20px' }}>
         {/* 💡 Outlet هو المكان الذي سيتم فيه عرض محتوى المسار المطابق من router.jsx */}
         <Outlet /> 
      </div>
    </div>
  );
}

export default App;