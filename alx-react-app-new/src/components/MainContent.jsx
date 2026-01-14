function MainContent() {
    return (
        <main style={{
            flex: '1',
            padding: '2rem',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px'
        }}>
            <p style={{
                fontSize: '1.5rem',
                color: '#333',
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                maxWidth: '600px',
                borderLeft: '5px solid #4CAF50'
            }}>
                I love to visit <span style={{color: 'blue', fontWeight: 'bold'}}>New York</span>, 
                <span style={{color: 'red', fontWeight: 'bold'}}> Paris</span>, and 
                <span style={{color: 'purple', fontWeight: 'bold'}}> Tokyo</span>.
            </p>
        </main>
    );
}

export default MainContent;
