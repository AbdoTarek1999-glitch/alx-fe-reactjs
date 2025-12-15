// src/components/FormikForm.jsx

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // 💡 استيراد Yup

// 1. 💡 تعريف Yup Validation Schema
const validationSchema = Yup.object({
  username: Yup.string().required('اسم المستخدم مطلوب'),
  email: Yup.string().email('صيغة البريد الإلكتروني غير صالحة').required('البريد الإلكتروني مطلوب'),
  password: Yup.string().min(6, 'يجب أن تكون 6 أحرف على الأقل').required('كلمة المرور مطلوبة'),
});

const FormikForm = () => {
  // 2. 💡 استخدام Formik Hook
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema, // ربط الـ Schema
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // هنا تتم عملية الإرسال
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ border: '1px solid green', padding: '20px' }}>
      <h2>التسجيل (باستخدام Formik و Yup)</h2>
      <div>
        <label htmlFor="username">اسم المستخدم:</label>
        <input 
          id="username"
          type="text"
          {...formik.getFieldProps('username')} // 💡 Formik Integration
        />
        {formik.touched.username && formik.errors.username ? (
          <p style={{ color: 'red' }}>{formik.errors.username}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">البريد الإلكتروني:</label>
        <input 
          id="email"
          type="email"
          {...formik.getFieldProps('email')} // 💡 Formik Integration
        />
        {formik.touched.email && formik.errors.email ? (
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">كلمة المرور:</label>
        <input 
          id="password"
          type="password"
          {...formik.getFieldProps('password')} // 💡 Formik Integration
        />
        {formik.touched.password && formik.errors.password ? (
          <p style={{ color: 'red' }}>{formik.errors.password}</p>
        ) : null}
      </div>

      <button type="submit">تسجيل (Formik)</button>
    </form>
  );
};

export default FormikForm;