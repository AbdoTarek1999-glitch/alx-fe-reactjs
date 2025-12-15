// src/App.jsx
import React from 'react';
// 💡 يجب استيراد هذه العناصر
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 

// استيراد مكونات الصفحات
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import PostDetail from './components/PostDetail';
import ProtectedRoute from './components/ProtectedRoute'; // سيتم استخدامه لاحقاً

function App() {
  return (
    // 💡 BrowserRouter لتغليف التطبيق (التحقق الأول)
    <BrowserRouter> 
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ margin: '0 10px' }}>الرئيسية</Link>
        <Link to="/about" style={{ margin: '0 10px' }}>حول</Link>
        <Link to="/dashboard" style={{ margin: '0 10px' }}>لوحة القيادة</Link>
      </nav>

      {/* 💡 Routes لتحديد منطقة الروتر (التحقق الثاني) */}
      <Routes>
        {/* 💡 Route للمسارات الفردية (التحقق الثالث) */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* 💡 Dynamic routing implemented (مسار ديناميكي) */}
        <Route path="/post/:id" element={<PostDetail />} /> 

        {/* 💡 Nested routes implemented (مسار متداخل) */}
        <Route path="/user" element={<div>إعدادات المستخدم</div>}>
            <Route path="profile" element={<h2>صفحة البروفايل</h2>} />
            <Route path="settings" element={<h2>صفحة الإعدادات</h2>} />
        </Route>

        {/* 💡 Protected route implemented (مسار محمي) */}
        <Route 
            path="/dashboard" 
            element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } 
        />

        {/* مسار احتياطي */}
        <Route path="*" element={<h1>404 - الصفحة غير موجودة</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
