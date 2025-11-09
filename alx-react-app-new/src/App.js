import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Abdo" age={25} bio="React Developer" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
