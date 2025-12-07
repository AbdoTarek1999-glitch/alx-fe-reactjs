import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import recipesData from "./data.json";

// Home Page
function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white p-6">
        <h1 className="text-3xl font-bold text-center">Recipe Sharing Platform</h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 mb-4">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        &copy; 2025 Recipe Sharing Platform
      </footer>
    </div>
  );
}

// Recipe Detail Page
function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="p-6">Recipe not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white p-6">
        <h1 className="text-3xl font-bold text-center">{recipe.title}</h1>
      </header>

      <main className="container mx-auto p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="mb-4">{recipe.summary}</p>

        {recipe.ingredients && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {recipe.steps && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Preparation Steps</h2>
            <ol className="list-decimal list-inside">
              {recipe.steps.map((step, idx) => (
                <li key={idx} className="mb-2">{step}</li>
              ))}
            </ol>
          </>
        )}

        <Link
          to="/"
          className="inline-block mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}

// Main App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
