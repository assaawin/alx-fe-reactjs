import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div style={{
            border: '2px solid #4CAF50',
            borderRadius: '10px',
            padding: '20px',
            margin: '20px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h3>User Profile (Using Context)</h3>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
        </div>
    );
}

export default UserProfile;
