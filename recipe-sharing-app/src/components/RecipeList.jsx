// src/components/RecipeList.jsx

import React from 'react';
import useRecipeStore from '../recipeStore';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton'; // سيتم إنشاء هذا المكون لاحقاً

const RecipeList = () => {
  // استخدام 'filteredRecipes' بدلاً من 'recipes'
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const navigate = useNavigate();

  if (filteredRecipes.length === 0) {
    return <p>لا توجد وصفات مطابقة لنتائج البحث.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>قائمة الوصفات</h2>
      {filteredRecipes.map(recipe => (
        <div 
          key={recipe.id} 
          style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div 
            onClick={() => navigate(`/recipes/${recipe.id}`)}
            style={{ cursor: 'pointer', flexGrow: 1 }}
          >
            <h4>{recipe.title}</h4>
            <p style={{ margin: 0 }}>{recipe.description.substring(0, 50)}...</p>
          </div>
          
          {/* مهمة 3: زر المفضلة */}
          <FavoriteButton recipeId={recipe.id} /> 
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
