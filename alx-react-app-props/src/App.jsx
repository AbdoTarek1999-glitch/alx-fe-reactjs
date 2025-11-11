import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext'; // استدعاء الContext

function App() {
  const userData = { name: "Abdo", age: 25, bio: "React Developer" };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <UserProfile /> {/* لم نعد نمرر props */}
        <MainContent />
        <Counter />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
