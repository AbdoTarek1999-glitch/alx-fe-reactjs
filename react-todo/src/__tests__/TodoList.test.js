// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TodoList from '../components/TodoList';

// الوصف العام لمجموعة الاختبارات
describe('TodoList Component Functionality', () => {

  // 1. اختبار عرض المهام الافتراضية
  test('renders the initial list of todos', () => {
    render(<TodoList />);
    expect(screen.getByText('شراء البقالة')).toBeInTheDocument();
    expect(screen.getByText('إنهاء مهمة React')).toBeInTheDocument();
  });

  // 2. اختبار إضافة مهمة جديدة
  test('allows adding a new todo item', () => {
    render(<TodoList />);
    
    // البحث عن حقل الإدخال وزر الإضافة باستخدام label/placeholder
    const input = screen.getByLabelText('New Todo Input'); // استخدام aria-label من TodoList.jsx
    const addButton = screen.getByText(/أضف مهمة/i);
    
    const newText = 'مهمة جديدة للاختبار';
    
    fireEvent.change(input, { target: { value: newText } });
    fireEvent.click(addButton);
    
    // التحقق من ظهور المهمة الجديدة
    expect(screen.getByText(newText)).toBeInTheDocument();
    expect(input.value).toBe(''); 
  });

  // 3. اختبار تبديل حالة الإكمال (Toggle)
  test('allows toggling the completion status of a todo item', () => {
    render(<TodoList />);
    
    const todoText = 'شراء البقالة';
    // البحث عن Checkbox باستخدام aria-label (الذي يحتوي على نص المهمة)
    const checkbox = screen.getByLabelText(`Toggle completion for ${todoText}`);
    
    // يجب أن تكون المهمة غير محددة في البداية
    expect(checkbox).not.toBeChecked();
    
    // النقر على خانة الاختيار لتغيير الحالة
    fireEvent.click(checkbox);
    
    // التحقق من أنها أصبحت محددة
    expect(checkbox).toBeChecked();

    // التحقق من أن النص يحتوي على خط (لإثبات التغيير المرئي)
    expect(screen.getByText(todoText)).toHaveStyle('text-decoration: line-through');
  });

  // 4. اختبار حذف مهمة
  test('allows deleting a todo item', () => {
    render(<TodoList />);
    
    const todoText = 'شراء البقالة';
    // البحث عن جميع أزرار الحذف
    const deleteButtons = screen.getAllByText('حذف');
    
    // نعتمد على أن زر الحذف للمهمة الأولى هو الأول في القائمة
    fireEvent.click(deleteButtons[0]);
    
    // التحقق من اختفاء المهمة
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
