// src/components/HomePage.jsx

import React, { useState, useEffect } from 'react';
import recipesData from '../data.json';
import { Link } from 'react-router-dom'; // <--- يجب استيراد Link

const HomePage = () => {
  // ... (بقية الكود)

  return (
    <div className="container mx-auto p-4 sm:p-8">
      {/* ... (العنوان) ... */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          
          // **** يجب استخدام Link هنا ****
          <Link 
            key={recipe.id} 
            to={`/recipe/${recipe.id}`} // توجيه إلى مسار التفاصيل
            className="block" 
          >
            {/* بطاقة الوصفة (التي كانت سابقًا div) */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.02] overflow-hidden border border-gray-100">
              
              {/* Image Section */}
              {/* ... */}

              {/* Content Section */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {recipe.summary}
                </p>
                
                {/* تم تغيير الزر ليصبح مجرد تنسيق لـ Link */}
                <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150">
                  View Recipe
                </span>
              </div>
            </div>
          </Link>
          // **********************************
        ))}
      </div>
    </div>
  );
};

export default HomePage;
