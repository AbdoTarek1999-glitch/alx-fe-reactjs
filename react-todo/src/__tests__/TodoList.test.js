// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TodoList from '../components/TodoList'; // تأكد أن المسار صحيح

// الوصف العام لمجموعة الاختبارات
describe('TodoList Component Functionality', () => {

  // 1. اختبار عرض المهام الافتراضية
  test('renders the initial todos correctly', () => {
    render(<TodoList />);
    // تحقق من وجود المهام الافتراضية
    expect(screen.getByText('تعلم Jest')).toBeInTheDocument();
    expect(screen.getByText('إنهاء المشروع')).toBeInTheDocument();
  });

  // 2. اختبار إضافة مهمة جديدة
  test('allows adding a new todo item', () => {
    render(<TodoList />);
    
    // البحث عن حقل الإدخال وزر الإضافة
    const input = screen.getByPlaceholderText(/مهمة جديدة/i);
    const addButton = screen.getByText(/إضافة/i);
    
    const newText = 'مهمة يجب إضافتها';
    
    // إدخال النص والضغط على الزر
    fireEvent.change(input, { target: { value: newText } });
    fireEvent.click(addButton);
    
    // التحقق من ظهور المهمة الجديدة في القائمة
    const newTodoElement = screen.getByText(newText);
    expect(newTodoElement).toBeInTheDocument();
    
    // التحقق من أن حقل الإدخال أصبح فارغاً
    expect(input.value).toBe(''); 
  });

  // 3. اختبار تبديل حالة الإكمال (Toggle)
  test('allows toggling the completion status of a todo item', () => {
    render(<TodoList />);
    
    // البحث عن مهمة "تعلم Jest" (التي تبدأ بـ completed: false)
    const todoText = screen.getByText('تعلم Jest');
    
    // التحقق من أنها غير مكتملة في البداية (لا يوجد خط)
    expect(todoText.parentNode).not.toHaveStyle('text-decoration: line-through');
    
    // النقر على النص لتبديل الحالة (وفقاً لكودك)
    fireEvent.click(todoText);
    
    // التحقق من أنها أصبحت مكتملة (يجب أن يحتوي العنصر الأب على خط)
    expect(todoText.parentNode).toHaveStyle('text-decoration: line-through');
    
    // النقر مرة أخرى لتبديلها مرة أخرى
    fireEvent.click(todoText);
    
    // التحقق من إزالة خط النص
    expect(todoText.parentNode).not.toHaveStyle('text-decoration: line-through');
  });

  // 4. اختبار حذف مهمة
  test('allows deleting a todo item', () => {
    render(<TodoList />);
    
    const todoText = 'تعلم Jest';
    
    // التحقق من وجود المهمة
    expect(screen.getByText(todoText)).toBeInTheDocument();
    
    // البحث عن زر الحذف المرتبط بها (قد نحتاج هنا إلى تحديد أدق إذا كان هناك أكثر من زر حذف)
    // نعتمد على أن زر الحذف هو الزر الوحيد داخل li
    const deleteButton = screen.getByRole('listitem', { name: todoText + ' حذف' }).querySelector('button');
    
    // النقر على زر الحذف
    fireEvent.click(deleteButton);
    
    // التحقق من اختفاء المهمة
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
