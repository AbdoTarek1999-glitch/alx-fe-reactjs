// src/components/Profile.jsx

import React from 'react';
// 💡 استيراد أدوات التوجيه اللازمة
import { Routes, Route, Link, Outlet } from 'react-router-dom'; 

// 💡 استيراد المكونات الفرعية
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div style={{ padding: '20px', border: '2px solid purple', margin: '20px' }}>
      <h2>إعدادات البروفايل (المستوى الثاني)</h2>

      {/* شريط تنقل فرعي داخل المكون */}
      <nav>
        <Link to="details" style={{ margin: '0 10px' }}>التفاصيل</Link>
        <Link to="settings" style={{ margin: '0 10px' }}>الإعدادات</Link>
      </nav>

      <div style={{ marginTop: '15px' }}>
        {/* 💡 استخدام Routes/Route داخل المكون نفسه (للتداخل العميق) */}
        <Routes>
          {/* مسار افتراضي عند الدخول على /user/profile */}
          <Route index element={<ProfileDetails />} /> 
          {/* المسارات الفرعية (تعتمد على المسار الأب) */}
          <Route path="details" element={<ProfileDetails />} /> 
          <Route path="settings" element={<ProfileSettings />} /> 
        </Routes>
      </div>
      
      {/* إذا كنت قد استخدمت Outlet بدلاً من Routes، تأكد من استخدام الأسلوب الذي استخدمته في App.jsx */}

    </div>
  );
};

export default Profile;
