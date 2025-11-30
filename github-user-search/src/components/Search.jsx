// src/components/Search.jsx

import { useState } from "react";
// تحديث اسم الدالة المستوردة
import { fetchUserData } from "../services/githubService"; 

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState(""); 
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(null); // لعرض رسالة الخطأ

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults([]);
    setSearchError(null); 

    // التحقق من وجود أي معيار بحث
    if (!username.trim() && !location.trim() && !repos.trim()) {
        setSearchError("Please enter at least one search criterion (Username, Location, or Min Repos).");
        setLoading(false);
        return;
    }

    try {
      // تحديث اسم الدالة المستدعاة
      const users = await fetchUserData(username, location, repos);
      if (users.length === 0) {
        setSearchError("No users found matching your criteria.");
      }
      setResults(users);
    } catch (e) {
      console.error(e);
      // رسالة الخطأ المطلوبة في المهمة 1: "Looks like we cant find the user"
      setSearchError("Looks like we cant find the user"); 
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
          onChange={(e) => setRepos(e.target.value.replace(/\D/, ''))}
          type="number"
        />

        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-full hover:bg-blue-700 transition duration-150"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* عرض حالة التحميل (المطلوبة في المهمة 1) */}
      {loading && <p className="mt-4 text-center text-blue-600">Loading...</p>}
      
      {/* عرض رسالة الخطأ (المطلوبة في المهمة 1) */}
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
              <p className="text-gray-600 text-sm">Score: {user.score.toFixed(2)}</p>
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