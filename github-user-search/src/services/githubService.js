// src/services/githubService.js

import axios from 'axios';

// تم تغيير اسم الدالة إلى fetchUserData لتلبية متطلبات الفحص
export const fetchUserData = async (username, location, minRepos) => {
    try {
      let query = "";
      
      // بناء استعلام البحث المتقدم (Advanced Search Query)
      if (username) {
          // يبدأ باسم المستخدم وشرط in:login
          query += `${username} in:login`;
      } else {
          // إذا لم يوجد اسم مستخدم، نستخدم type:user لضمان وجود استعلام أساسي
          query += `type:user`;
      }
      
      // إضافة الموقع إذا وجد
      if (location) {
          query += ` location:${location}`;
      }
      
      // إضافة شرط عدد المستودعات
      const repoCount = Number(minRepos); 
      if (!isNaN(repoCount) && repoCount > 0) {
          query += ` repos:>${repoCount}`;
      }
  
      const res = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
  
      return res.data.items;
    } catch (error) {
      console.error("GitHub API Error:", error.response ? error.response.data : error.message);
      // رفع الخطأ ليتم التعامل معه في مكون Search.jsx
      throw error;
    }
};