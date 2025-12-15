// src/components/PostsComponent.jsx

import React from 'react';
import { useQuery } from '@tanstack/react-query';

// ... (fetchPosts function remains the same) ...

const PostsComponent = () => {
  // 💡 يجب استخراج isError و error
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({ 
    queryKey: ['posts'], 
    queryFn: fetchPosts,
    staleTime: 5000, 
  });

  if (isLoading) {
    return <h2>جاري التحميل...</h2>;
  }
  
  // 💡 الإصلاح المطلوب: التحقق من حالة الخطأ وعرض رسالة مناسبة
  if (isError) {
    return <h2>حدث خطأ: فشل في جلب البيانات ({error.message})</h2>;
  }

  return (
    // ... (باقي كود عرض البيانات وزر Refetch) ...
    <div>
      {/* ... */}
    </div>
  );
};

export default PostsComponent;
