import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom'; 

// 1. اختبار العرض الأولي
test('renders initial todos and header', () => {
    render(<TodoList />);
    expect(screen.getByText(/قائمة المهام/i)).toBeInTheDocument();
    expect(screen.getByText('تعلم Jest')).toBeInTheDocument();
});

// 2. اختبار إضافة مهمة جديدة
test('allows user to add a new todo', () => {
    render(<TodoList />);
    
    const inputElement = screen.getByPlaceholderText('مهمة جديدة');
    fireEvent.change(inputElement, { target: { value: 'مهمة الاختبار الجديدة' } });

    const addButton = screen.getByText('إضافة');
    fireEvent.click(addButton);

    expect(screen.getByText('مهمة الاختبار الجديدة')).toBeInTheDocument();
});

// 3. اختبار تبديل حالة الإكمال
test('allows user to toggle a todo item', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('تعلم Jest');
    
    // الحالة الأولية (غير مكتمل)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoItem); // النقر للتبديل

    // التحقق من تطبيق نمط الإكمال
    expect(todoItem).toHaveStyle('text-decoration: line-through');
});

// 4. اختبار حذف مهمة
test('allows user to delete a todo item', () => {
    render(<TodoList />);
    
    const todoText = 'إنهاء المشروع';
    
    const deleteButtons = screen.getAllByText('حذف');
    // إنهاء المشروع هي المهمة الثانية في المصفوفة
    fireEvent.click(deleteButtons[1]); 
    
    // التأكد من اختفاء المهمة
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
});