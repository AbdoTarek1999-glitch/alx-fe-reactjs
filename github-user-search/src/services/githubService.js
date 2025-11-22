// githubService.js

import axios from 'axios'; // تم إضافة استيراد axios

export const advancedUserSearch = async (username, location, minRepos) => {
    try {
      let query = "";
      
      // 1. يجب أن يبدأ الاستعلام بمعامل بحث
      // إذا كان اسم المستخدم موجودًا، استخدمه كنقطة بداية للاستعلام.
      if (username) {
          query += `${username} in:login`;
      } else {
          // إذا لم يتم إدخال اسم مستخدم، يجب أن يبدأ الاستعلام بعامل آخر إلزامي
          // لكن بما أن الـ API يتطلب معامل بحث، سنضع شرطاً للبحث بدون اسم مستخدم
          // مثلاً عبر: type:user
          query += `type:user`;
      }
      
      // 2. إضافة باقي المعايير (مع التأكد من وجود مسافة بادئة)
      if (location) {
          query += ` location:${location}`;
      }
      
      // تحويل minRepos إلى رقم للتأكد من صِحة الشرط
      const repoCount = Number(minRepos); 
      if (!isNaN(repoCount) && repoCount > 0) {
          query += ` repos:>${repoCount}`;
      }
  
      const res = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
  
      return res.data.items;
    } catch (error) {
      // طباعة الخطأ لتسهيل التصحيح
      console.error("GitHub API Error:", error.response ? error.response.data : error.message);
      throw error;
    }
};