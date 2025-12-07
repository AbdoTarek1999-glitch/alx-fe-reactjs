import { useState, useEffect } from 'react';
import recipesData from '../data.json'; // هنعمل ملف data.json بعد شوية

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData); // تحميل البيانات من ملف JSON
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
