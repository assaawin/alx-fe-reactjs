import UserInfo from './UserInfo';

function ProfilePage() {
    return (
        <div style={{
            margin: '20px',
            padding: '20px',
            backgroundColor: '#e8f4f8',
            borderRadius: '10px'
        }}>
            <h2>Profile Page Component</h2>
            <p style={{color: 'green'}}>
                ✓ NOT receiving userData as props!
            </p>
            <UserInfo />
        </div>
    );
}

export default ProfilePage;
