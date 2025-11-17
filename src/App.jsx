// src/App.jsx (تحديث)

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
// استيراد المكونات الجديدة
import RecipeDetails from './components/RecipeDetails'; 
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>تطبيق مشاركة الوصفات (Zustand)</h1>
        <nav style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff' }}>الرئيسية (القائمة)</Link>
          <Link to="/add" style={{ margin: '0 10px', textDecoration: 'none', color: '#4CAF50' }}>إضافة وصفة</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          
          {/* مسار تفاصيل الوصفة: يستخدم :id كمعامل */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          
          {/* مسار تعديل الوصفة: يستخدم :id كمعامل */}
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;