import React, { useContext } from 'react';
import UserContext from './UserContext'; // تم تصحيح المسار ليكون استيرادًا مباشرًا من نفس المجلد

function UserProfile() {
  const userData = useContext(UserContext);

  if (!userData) {
    return <div>Loading profile data...</div>;
  }

  // ملاحظة: البيانات الحالية في App.jsx لا تحتوي على age أو bio.
  // سيتم عرضها فقط إذا تم إضافتها إلى كائن userData في App.jsx
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#007bff', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
        {userData.name}
      </h2>
      
      {/* عرض البيانات الجديدة، مع التأكد من وجودها */}
      {userData.email && <p>Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span></p>}
      {userData.age && <p>Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span></p>}
      {userData.bio && <p>Bio: {userData.bio}</p>}

      {/* لإظهار البيانات التي يمررها Context الحالي (Name, Email) */}
      {!userData.age && !userData.email && (
        <p style={{ color: 'red' }}>Note: Context data only contains Name/Email. Age and Bio are missing.</p>
      )}
    </div>
  );
}

export default UserProfile;