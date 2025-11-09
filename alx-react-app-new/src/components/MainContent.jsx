import React from 'react';

function MainContent() {
  return (
    <main
      style={{
        backgroundColor: '#e0f7fa',
        padding: '20px',
        minHeight: '200px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: '#006064' }}>Welcome to My App</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        This is the main content area where you can add descriptions, images, and more.
      </p>
    </main>
  );
}

export default MainContent;
