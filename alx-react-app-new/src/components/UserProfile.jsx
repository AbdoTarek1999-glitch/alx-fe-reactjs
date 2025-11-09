import React from 'react';

function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
