// src/components/RecipeList.jsx (تحديث)

// ... (باقي الواردات)
import { Link } from 'react-router-dom'; // إضافة رابط

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>قائمة الوصفات</h2>
      {recipes.length === 0 ? (
        <p>لا توجد وصفات بعد. ابدأ بإضافة واحدة!</p>
      ) : (
        recipes.map(recipe => (
          // استخدام Link للانتقال إلى مسار التفاصيل
          <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px', borderRadius: '4px' }}>
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#333' }}>
              <h3 style={{ margin: '0 0 5px 0', color: '#007bff' }}>{recipe.title}</h3>
            </Link>
            <p style={{ margin: 0, color: '#666' }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;