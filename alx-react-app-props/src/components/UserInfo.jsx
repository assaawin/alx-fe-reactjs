import UserDetails from './UserDetails';

function UserInfo() {
    return (
        <div style={{
            margin: '20px',
            padding: '20px',
            backgroundColor: '#f0f8e8',
            borderRadius: '10px'
        }}>
            <h3>User Info Component</h3>
            <p style={{color: 'green'}}>
                ✓ NOT receiving or passing userData as props!
            </p>
            <UserDetails />
        </div>
    );
}

export default UserInfo;
