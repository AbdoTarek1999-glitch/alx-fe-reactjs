// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'; 

// يجب استيراد جميع المكونات التي تم إنشاؤها خلال المهمة
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import BlogPost from './components/BlogPost';      // للمسار الديناميكي /blog/:id
import ProtectedRoute from './components/ProtectedRoute'; // للحماية
import Profile from './components/Profile';         // للمسار المتداخل والمطلوب
import ProfileDetails from './components/ProfileDetails'; // للمسارات المتداخلة (المستوى الثالث)
import ProfileSettings from './components/ProfileSettings'; // للمسارات المتداخلة (المستوى الثالث)

// مكون تخطيط (Layout) للمسارات المتداخلة في المستوى الثاني
const SettingsLayout = () => (
    <div style={{ padding: '20px' }}>
        <h2>إعدادات المستخدم</h2>
        {/* Outlet لعرض المكون المتداخل */}
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
        <Link to="/profile" style={{ margin: '0 10px' }}>ملف شخصي (مطلوب)</Link>
        <Link to="/dashboard" style={{ margin: '0 10px' }}>لوحة القيادة (محمي)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* 💡 الإصلاح الأخير المطلوب: المسار الثابت /profile */}
        <Route path="/profile" element={<Profile />} /> 
        
        {/* Dynamic routing implemented: /blog/:id */}
        <Route path="/blog/:id" element={<BlogPost />} /> 

        {/* Nested routes implemented: /user/profile */}
        <Route path="/user" element={<SettingsLayout />}>
            <Route path="profile" element={<Profile />} /> 
            <Route path="settings" element={<h2>إعدادات عامة</h2>} />
        </Route>

        {/* Protected route implemented: /dashboard */}
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
