import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';  // Changed to .jsx

function UserDetails() {
    // Get userData directly from context
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
            <h3>User Details Component</h3>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p style={{
                color: 'green', 
                fontStyle: 'italic',
                fontWeight: 'bold',
                backgroundColor: '#e8f5e9',
                padding: '10px',
                borderRadius: '5px'
            }}>
                ✓ Getting data via CONTEXT API (useContext)!
            </p>
        </div>
    );
}

export default UserDetails;
