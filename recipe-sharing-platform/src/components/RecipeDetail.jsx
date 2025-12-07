// src/components/RecipeDetail.jsx

import React, { useState, useEffect } from 'react'; // <--- يجب استيراد useEffect
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // **** يجب أن يكون هذا الجزء موجودًا ****
  useEffect(() => {
    // جلب البيانات بناءً على ID
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
    setLoading(false);
  }, [id]);
  // *************************************

  if (loading) {
    return <div className="text-center p-10 text-xl">Loading...</div>;
  }

  if (!recipe) {
    return <div className="text-center p-10 text-xl text-red-600">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-8">
      {/* ... (بقية التصميم) ... */}
      
      {/* القسم الخاص بـ Instructions */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
          Instructions 🧑‍🍳
        </h2>
        {/* **** يجب أن يكون هذا الجزء موجودًا **** */}
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="pl-2">
              {step}
            </li>
          ))}
        </ol>
        {/* ************************************* */}
      </div>
      
      {/* ... (بقية المكون) ... */}
    </div>
  );
};

export default RecipeDetail;
