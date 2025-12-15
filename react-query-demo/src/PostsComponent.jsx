import { useQuery, useQueryClient } from '@tanstack/react-query';

// دالة جلب البيانات (Fetcher)
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('فشل جلب البيانات');
    }
    return res.json();
};

const PostsComponent = () => {
    const queryClient = useQueryClient();

    // استخدام useQuery لجلب وتخزين البيانات مؤقتًا
    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ['posts'], // المفتاح الفريد للبيانات
        queryFn: fetchPosts,
        staleTime: 5000, // البيانات تعتبر "طازجة" لمدة 5 ثوانٍ
    });

    if (isLoading) return <div>جاري تحميل البيانات الأولية...</div>;
    if (error) return <div>حدث خطأ: {error.message}</div>;

    return (
        <div>
            <h2>قائمة المنشورات (React Query)</h2>
            <button 
                onClick={() => queryClient.invalidateQueries({ queryKey: ['posts'] })}
                disabled={isFetching}
                style={{ marginBottom: '20px' }}
            >
                {isFetching ? 'جاري تحديث...' : 'تحديث البيانات (Refetch)'}
            </button>
            
            {/* عرض البيانات */}
            {data.slice(0, 10).map(post => (
                <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
                    <h4>{post.title}</h4>
                    <p>{post.body.substring(0, 50)}...</p>
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;