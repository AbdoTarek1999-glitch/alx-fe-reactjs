// src/components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '8px', 
      borderBottom: '1px solid #eee',
      textDecoration: todo.completed ? 'line-through' : 'none' 
    }}>
      <div>
        {/* Checkbox لتغيير حالة الإكمال (يجب أن يكون موجوداً) */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          // 💡 aria-label ضروري للاختبار لكي يتم العثور على العنصر
          aria-label={`Toggle completion for ${todo.text}`} 
        />
        <span style={{ marginLeft: '10px' }}>{todo.text}</span>
      </div>
      
      {/* زر الحذف */}
      <button 
        onClick={() => deleteTodo(todo.id)}
        style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px' }}
      >
        حذف
      </button>
    </li>
  );
};

export default TodoItem;
