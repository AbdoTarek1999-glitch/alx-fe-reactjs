import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'تعلم Jest', completed: false },
        { id: 2, text: 'إنهاء المشروع', completed: true },
    ]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
        setNewTodo('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>قائمة المهام</h1>
            <form onSubmit={addTodo}>
                <input 
                    type="text" 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)} 
                    placeholder="مهمة جديدة"
                />
                <button type="submit">إضافة</button>
            </form>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none', display: 'flex', gap: '10px' }}>
                        <span onClick={() => toggleTodo(todo.id)} role="listitem-text" style={{ cursor: 'pointer' }}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>حذف</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;