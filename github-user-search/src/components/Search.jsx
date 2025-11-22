// Search.jsx

import { useState } from "react";
// تأكد من أن المسار صحيح إذا كان الملف في services/
import { advancedUserSearch } from "../services/githubService"; 

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  // القيمة تبقى كنص في حالة المكون، ويتم تحويلها في دالة advancedUserSearch
  const [repos, setRepos] = useState(""); 
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(null); // لإضافة عرض رسالة الخطأ

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults([]);
    setSearchError(null); // مسح الأخطاء السابقة

    // التحقق من وجود أي حقل مدخل (على الأقل واحد للبحث)
    if (!username.trim() && !location.trim() && !repos.trim()) {
        setSearchError("Please enter at least one search criterion (Username, Location, or Min Repos).");
        setLoading(false);
        return;
    }

    try {
      const users = await advancedUserSearch(username, location, repos);
      if (users.length === 0) {
        setSearchError("No users found matching your criteria.");
      }
      setResults(users);
    } catch (e) {
      console.error(e);
      setSearchError("An error occurred while fetching data from GitHub. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          className="border rounded p-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border rounded p-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="border rounded p-2"
          placeholder="Min Repos"
          value={repos}
          onChange={(e) => setRepos(e.target.value.replace(/\D/, ''))} // لضمان إدخال الأرقام فقط
          type="number" // لاستخدام لوحة مفاتيح الأرقام على الجوال
        />

        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-full hover:bg-blue-700 transition duration-150"
          disabled={loading} // تعطيل الزر أثناء التحميل
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* عرض رسائل الحالة والخطأ */}
      {loading && <p className="mt-4 text-center text-blue-600">Loading...</p>}
      
      {searchError && !loading && (
        <p className="mt-4 text-center text-red-600 font-semibold">{searchError}</p>
      )}

      {/* عرض النتائج */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow flex items-center space-x-4 bg-white">
            <img
              src={user.avatar_url}
              className="w-16 h-16 rounded-full object-cover"
              alt={`${user.login} avatar`}
            />
            <div>
              <h3 className="font-bold text-lg">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline transition duration-150"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}