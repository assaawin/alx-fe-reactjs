function Home() {
    return (
        <div style={{
            padding: '40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            minHeight: 'calc(100vh - 200px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{
                fontSize: '3.5rem',
                marginBottom: '20px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
                Welcome to Our Company
            </h1>
            <p style={{
                fontSize: '1.5rem',
                maxWidth: '800px',
                lineHeight: '1.6',
                marginBottom: '30px'
            }}>
                We are dedicated to delivering excellence in all our services.
                Innovation, quality, and customer satisfaction are at the heart of everything we do.
            </p>
            <div style={{
                display: 'flex',
                gap: '20px',
                marginTop: '30px'
            }}>
                <button style={{
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                    Get Started
                </button>
                <button style={{
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '50px',
                    cursor: 'pointer'
                }}>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Home;
