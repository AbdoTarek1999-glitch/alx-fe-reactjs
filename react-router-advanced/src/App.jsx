// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'; 

// استيراد جميع المكونات المطلوبة
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import BlogPost from './components/BlogPost';      // 💡 المكون الديناميكي المطلوب
import ProtectedRoute from './components/ProtectedRoute'; 
import Profile from './components/Profile';         // لـ Nested Routes
// يجب أن يكون لديك أيضاً ProfileDetails و ProfileSettings و PostDetail...

// مكون تخطيط (Layout) للمسارات المتداخلة (المستوى الثاني)
const SettingsLayout = () => (
    <div style={{ padding: '20px' }}>
        <h2>إعدادات المستخدم</h2>
        {/* Outlet هو المكان الذي ستظهر فيه محتويات Profile.jsx */}
        <Outlet /> 
    </div>
);

function App() {
  return (
    <BrowserRouter> 
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/" style={{ margin: '0 10px' }}>الرئيسية</Link>
        <Link to="/about" style={{ margin: '0 10px' }}>حول</Link>
        <Link to="/blog/1" style={{ margin: '0 10px' }}>مقالة مدونة (ديناميكي)</Link>
        <Link to="/user" style={{ margin: '0 10px' }}>الإعدادات (متداخل)</Link>
        <Link to="/dashboard" style={{ margin: '0 10px' }}>لوحة القيادة (محمي)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* 💡 Dynamic routing implemented: المسار الديناميكي المطلوب */}
        <Route path="/blog/:id" element={<BlogPost />} /> 

        {/* 💡 Nested routes implemented: المسارات المتداخلة */}
        <Route path="/user" element={<SettingsLayout />}>
            {/* المسار الفرعي profile الذي يستخدم Profile.jsx */}
            <Route path="profile" element={<Profile />} /> 
            <Route path="settings" element={<h2>إعدادات عامة</h2>} />
        </Route>

        {/* 💡 Protected route implemented: المسار المحمي */}
        <Route 
            path="/dashboard" 
            element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } 
        />

        {/* مسار 404 */}
        <Route path="*" element={<h1>404 - الصفحة غير موجودة</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
