// src/components/RegistrationForm.jsx

import React, { useState } from 'react';

const RegistrationForm = () => {
  // 1. تعريف الحالة
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!username) newErrors.username = "اسم المستخدم مطلوب";
    if (!email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (password.length < 6) newErrors.password = "يجب أن تكون كلمة المرور 6 أحرف على الأقل";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`تم التسجيل: ${username}, ${email}`);
      // هنا يمكنك إرسال البيانات إلى API
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '40px', border: '1px solid #ccc', padding: '20px' }}>
      <h2>التسجيل (Controlled Components)</h2>
      <div>
        <label>اسم المستخدم:</label>
        <input 
          type="text" 
          value={username} // 💡 الإصلاح 1: ربط القيمة بالحالة
          onChange={(e) => setUsername(e.target.value)} 
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>البريد الإلكتروني:</label>
        <input 
          type="email" 
          value={email} // 💡 الإصلاح 2: ربط القيمة بالحالة
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>كلمة المرور:</label>
        <input 
          type="password" 
          value={password} // 💡 الإصلاح 3: ربط القيمة بالحالة
          onChange={(e) => setPassword(e.target.value)} 
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">تسجيل</button>
    </form>
  );
};

export default RegistrationForm;