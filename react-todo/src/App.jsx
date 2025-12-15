// src/App.jsx (لمشروع react-todo)
import React from 'react';
import TodoList from './components/TodoList'; // تأكد من المسار الصحيح

function App() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>مرحبًا في تطبيق قائمة المهام</h1>
      <TodoList />
    </div>
  );
}

export default App;