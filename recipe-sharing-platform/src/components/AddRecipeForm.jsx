// src/components/AddRecipeForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    instructions: '',
    image: '',
  });
  
  // **** يجب أن تكون حالة errors موجودة ****
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // إزالة الخطأ عند بدء الكتابة باستخدام setErrors
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  // **** يجب أن تكون دالة validate موجودة ****
  const validate = () => {
    let newErrors = {};
    // مثال لـ validation: التأكد من أن الحقول ليست فارغة
    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required.';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
    if (!formData.instructions.trim()) newErrors.instructions = 'Instructions are required.';
    
    // حفظ الأخطاء باستخدام setErrors
    setErrors(newErrors); 
    return Object.keys(newErrors).length === 0; // إرجاع true إذا لم يكن هناك أخطاء
  };
  // ********************************************

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // استخدام دالة validate للتحقق قبل الإرسال

    setIsSubmitting(true);
    
    // ... (بقية منطق الإرسال) ...
  };

  return (
    // ...
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-blue-500/20 space-y-6">
        
        {/* مثال على استخدام errors لعرض رسالة الخطأ */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Recipe Title</label>
          <input
            // ...
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
          />
          {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
        </div>
        {/* ... (كرر لجميع الحقول) ... */}
    </form>
    // ...
  );
};

export default AddRecipeForm;
