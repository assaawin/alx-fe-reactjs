const UserProfile = (props) => {
    return (
        <div style={{
            border: '2px solid #e0e0e0',
            borderRadius: '10px',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '500px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
        }}>
            <h2 style={{
                color: 'blue',
                fontSize: '2rem',
                marginBottom: '15px',
                borderBottom: '2px solid blue',
                paddingBottom: '10px'
            }}>
                {props.name}
            </h2>
            <p style={{
                fontSize: '1.2rem',
                margin: '10px 0',
                color: '#555'
            }}>
                Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span>
            </p>
            <p style={{
                fontSize: '1.1rem',
                margin: '10px 0',
                color: '#777',
                fontStyle: 'italic',
                backgroundColor: '#f0f0f0',
                padding: '10px',
                borderRadius: '5px'
            }}>
                Bio: {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;
