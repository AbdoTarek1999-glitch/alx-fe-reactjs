// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// استيراد بيانات الوصفات من ملف JSON
import recipesData from '../data.json'; 

const RecipeDetail = () => {
  // استخدام useParams للحصول على ID الوصفة من مسار URL
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // **** useEffect لجلب بيانات الوصفة ****
  useEffect(() => {
    // البحث عن الوصفة في البيانات بناءً على ID
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center p-10 text-xl">Loading...</div>;
  }

  if (!recipe) {
    return <div className="text-center p-10 text-xl text-red-600">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-8">
      {/* زر العودة إلى الصفحة الرئيسية */}
      <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium mb-4 inline-block">
        &larr; Back to Home
      </Link>
      
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl border border-gray-100">
        
        {/* Title and Image Section (يعرض image) */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            {/* **** عرض image **** */}
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
              {recipe.title}
            </h1>
            <p className="text-gray-600 text-lg italic mb-4">
              {recipe.summary}
            </p>
            <div className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
              Preparation Time: {recipe.prepTime}
            </div>
          </div>
        </div>

        {/* Ingredients and Instructions Section (Responsive Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Ingredients Card (يعرض ingredients) */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Ingredients 🧂
            </h2>
            {/* **** عرض ingredients **** */}
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="pl-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Instructions Card (يعرض instructions) */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Instructions 🧑‍🍳
            </h2>
            {/* **** عرض instructions **** */}
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="pl-2">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
