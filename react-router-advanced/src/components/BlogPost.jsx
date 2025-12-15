// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // استخدام useParams لسحب الـ ID
  const { id } = useParams();
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ff4500', margin: '20px' }}>
      <h2>تفاصيل مقالة المدونة (مسار ديناميكي)</h2>
      <p>أنت تشاهد المقالة رقم: <strong>{id}</strong></p>
      <p>هنا يتم جلب وعرض بيانات المقالة بالكامل...</p>
    </div>
  );
};

export default BlogPost;
