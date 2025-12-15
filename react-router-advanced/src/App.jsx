// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'; 

// ... استيراد المكونات الأخرى ...
import Profile from './components/Profile'; // 💡 الاستيراد الجديد

// مكون إعدادات رئيسي (يمكنك تسميته Settings.jsx أو وضعه مباشرة)
const SettingsLayout = () => (
    <div style={{ padding: '20px' }}>
        <h2>إعدادات المستخدم الرئيسية</h2>
        {/* Outlet هو المكان الذي سيتم عرض المكون المتداخل فيه (Profile/Settings) */}
        <Outlet /> 
    </div>
);

function App() {
  return (
    <BrowserRouter> 
      {/* ... شريط التنقل (Navigation) ... */}
      <Routes>
        {/* ... المسارات الأخرى (Home, About, PostDetail, Dashboard) ... */}

        {/* 💡 Nested routes implemented (المسارات المتداخلة) */}
        <Route path="/user" element={<SettingsLayout />}>
            <Route path="profile" element={<Profile />} /> {/* 💡 استخدام المكون المطلوب */}
            <Route path="settings" element={<h2>صفحة الإعدادات</h2>} />
        </Route>

        {/* ... المسارات المحمية والديناميكية ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
