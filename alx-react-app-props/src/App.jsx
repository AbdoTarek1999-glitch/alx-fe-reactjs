import React from 'react'; // يجب استيراد React
import Header from './Header'; // تم تصحيح المسار
import MainContent from './MainContent'; // تم تصحيح المسار
import Footer from './Footer'; // تم تصحيح المسار
import Counter from './Counter'; // تم تصحيح المسار
import UserProfile from './UserProfile'; // تم تصحيح المسار
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // هذا المسار صحيح

function App() {
  // تعريف بيانات المستخدم الجديدة
  const userData = { 
    name: "Abdo", 
    age: 25, 
    bio: "React Developer",
    // تمت إضافة email هنا للتماشي مع مكون UserDetails.jsx
    email: "abdo.dev@example.com" 
  };

  return (
    <UserContext.Provider value={userData}>
      {/* Container لتنسيق الصفحة */}
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        
        {/* Header and Footer, MainContent, Counter هي الآن عناصر أساسية في هيكل التطبيق */}
        <Header />
        
        <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
          Welcome, {userData.name} (Context Demo)
        </h1>
        
        <UserProfile /> {/* يستهلك Context */}
        <MainContent />
        <Counter />
        <Footer />
        
      </div>
    </UserContext.Provider>
  );
}

export default App;
