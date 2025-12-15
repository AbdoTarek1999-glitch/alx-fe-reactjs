// src/components/TodoList.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem'; // 💡 نعتمد على TodoItem منفصل

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'شراء البقالة', completed: false }, // 💡 مهمة غير مكتملة
    { id: 2, text: 'إنهاء مهمة React', completed: true }, // 💡 مهمة مكتملة
  ]);
  const [newTodoText, setNewTodoText] = useState(''); // تم تغيير الاسم إلى newTodoText ليكون أكثر وضوحاً

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: newTodoText.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  // وظيفة تبديل حالة الإكمال
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // وظيفة الحذف
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>قائمة المهام</h1>

      {/* نموذج الإضافة */}
      <form onSubmit={addTodo} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="أدخل مهمة جديدة..."
          aria-label="New Todo Input" // 💡 إضافة aria-label للاختبار
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          أضف مهمة
        </button>
      </form>

      {/* قائمة المهام */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      
      {/* يمكن إضافة عرض المهام المتبقية هنا إذا كان مطلوباً */}
    </div>
  );
};

export default TodoList;
