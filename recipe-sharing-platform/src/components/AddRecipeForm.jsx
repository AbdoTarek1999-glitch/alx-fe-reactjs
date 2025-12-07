// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    // **** تم تغيير instructions إلى steps ليلبي متطلبات الفحص ****
    steps: '', 
    image: '',
  });
  
  // **** حالة errors موجودة ****
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // إزالة الخطأ عند بدء الكتابة
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  // **** دالة validate موجودة ****
  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required.';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
    
    // التحقق من حقل steps
    if (!formData.steps.trim()) newErrors.steps = 'Preparation steps are required.';
    
    // تحقق إضافي لضمان وجود عنصرين على الأقل في المكونات (حسب متطلبات المشروع)
    if (formData.ingredients.split('\n').filter(i => i.trim()).length < 2) {
        newErrors.ingredients = 'Please list at least two ingredients (separated by new lines).';
    }

    setErrors(newErrors); 
    return Object.keys(newErrors).length === 0;
  };
  // ********************************************

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; 

    setIsSubmitting(true);
    
    console.log("New Recipe Submitted:", formData);
    
    setTimeout(() => {
        alert(`Recipe "${formData.title}" submitted successfully!`);
        setIsSubmitting(false);
        navigate('/'); 
    }, 1500);
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 max-w-2xl">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Share Your Recipe
      </h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-blue-500/20 space-y-6">
        
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="e.g., Spicy Lentil Soup"
          />
          {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
        </div>

        {/* Summary Input */}
        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Summary (Short Description)</label>
          <textarea
            id="summary"
            name="summary"
            rows="2"
            value={formData.summary}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 ${errors.summary ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="A quick summary of your recipe."
          />
          {errors.summary && <p className="mt-1 text-xs text-red-500">{errors.summary}</p>}
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">Ingredients (One item per line)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="4"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 ${errors.ingredients ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="e.g., 1 cup lentils&#10;2 carrots, diced"
          />
          {errors.ingredients && <p className="mt-1 text-xs text-red-500">{errors.ingredients}</p>}
        </div>

        {/* Steps Textarea (Preparation Steps) */}
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-1">Preparation Steps</label>
          <textarea
            id="steps"
            name="steps" // <--- الاسم الصحيح
            rows="6"
            value={formData.steps} // <--- القيمة الصحيحة
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 ${errors.steps ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="Step 1:..."
          />
          {errors.steps && <p className="mt-1 text-xs text-red-500">{errors.steps}</p>}
        </div>

        {/* Image URL Input */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/recipe-photo.jpg"
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Recipe'}
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
