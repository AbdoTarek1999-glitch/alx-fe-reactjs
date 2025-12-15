import React from 'react';
import { useQuery } from '@tanstack/react-query';

// دالة جلب البيانات (Fetch Function)
const fetchPosts = async () => {
  // 💡 الحل: الرابط موجود بشكل مباشر هنا
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
  if (!res.ok) {
    throw new Error('فشل جلب المنشورات');
  }
  return res.json();
};

const PostsComponent = () => {
  // 💡 استخراج isError و error و refetch و isFetching
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'], 
    queryFn: fetchPosts,
    staleTime: 5000, // مثال على Caching/Stale Time
  });

  if (isLoading) {
    return <h2>جاري التحميل...</h2>;
  }
  
  // معالجة حالة الخطأ (isError)
  if (isError) {
    return <h2>حدث خطأ: فشل في جلب البيانات ({error.message})</h2>;
  }

  return (
    <div>
      <h2>قائمة المنشورات ({isFetching ? 'جاري التحديث...' : 'تم التخزين'})</h2>
      
      {/* زر لإعادة جلب البيانات (Data refetch interaction) */}
      <button onClick={() => refetch()} disabled={isFetching} style={{ padding: '10px', margin: '10px 0' }}>
        {isFetching ? 'جاري جلب البيانات...' : 'إعادة جلب البيانات (Refetch)'}
      </button>

      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id} style={{ marginBottom: '10px', borderBottom: '1px dotted #ccc' }}>
            <strong>{post.title}</strong>
            <p>{post.body.substring(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
