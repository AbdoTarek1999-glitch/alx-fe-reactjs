import { useState } from 'react';

const ControlledForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // إزالة الخطأ بمجرد أن يبدأ المستخدم الكتابة
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        let currentErrors = {};
        if (!formData.username) currentErrors.username = 'اسم المستخدم مطلوب';
        if (!formData.email) currentErrors.email = 'البريد الإلكتروني مطلوب';
        if (!formData.password) currentErrors.password = 'كلمة المرور مطلوبة';
        setErrors(currentErrors);
        return Object.keys(currentErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("بيانات الإرسال (Controlled):", formData);
            // هنا يمكنك استدعاء API
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>تسجيل يدوي (Controlled)</h2>
            {/* حقل اسم المستخدم */}
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="اسم المستخدم" />
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            {/* حقول أخرى... */}
            <button type="submit">تسجيل</button>
        </form>
    );
};

export default ControlledForm;