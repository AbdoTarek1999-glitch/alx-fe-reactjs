// src/hooks/useAuth.jsx
import { useState } from 'react';

// هذا الهوك هو مجرد نموذج (Mock) لإنجاز المهمة
const useAuth = () => {
  // 💡 يمكن أن يكون هذا state حقيقي في مشروع فعلي
  const [user, setUser] = useState({ loggedIn: true }); 

  // يعيد حالة تسجيل الدخول للمستخدم
  return {
    isAuthenticated: user.loggedIn,
    user,
    // وظائف تسجيل الدخول/الخروج يمكن وضعها هنا
  };
};

export default useAuth;
