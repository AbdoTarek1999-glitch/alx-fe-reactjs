// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TodoList from '../components/TodoList';

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
    
    // البحث عن حقل الإدخال باستخدام aria-label
    const input = screen.getByLabelText('New Todo Input'); 
    const addButton = screen.getByText(/أضف مهمة/i);
    
    const newText = 'مهمة جديدة للاختبار';
    
    fireEvent.change(input, { target: { value: newText } });
    fireEvent.click(addButton);
    
    // التحقق من ظهور المهمة الجديدة
    expect(screen.getByText(newText)).toBeInTheDocument();
    expect(input.value).toBe(''); 
  });

  // 3. اختبار تبديل حالة الإكمال (Toggle) باستخدام Checkbox
  test('allows toggling the completion status of a todo item', () => {
    render(<TodoList />);
    
    const todoText = 'شراء البقالة';
    // البحث عن Checkbox باستخدام aria-label
    const checkbox = screen.getByLabelText(`Toggle completion for ${todoText}`);
    
    // النقر على خانة الاختيار لتغيير الحالة
    fireEvent.click(checkbox);
    
    // التحقق من أن النص يحتوي على خط (لإثبات التغيير المرئي)
    expect(screen.getByText(todoText)).toHaveStyle('text-decoration: line-through');
  });

  // 4. اختبار حذف مهمة
  test('allows deleting a todo item', () => {
    render(<TodoList />);
    
    const todoText = 'شراء البقالة';
    // البحث عن جميع أزرار الحذف
    const deleteButtons = screen.getAllByText('حذف');
    
    // النقر على زر الحذف للمهمة الأولى
    fireEvent.click(deleteButtons[0]);
    
    // التحقق من اختفاء المهمة
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
