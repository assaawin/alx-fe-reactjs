function About() {
    return (
        <div style={{
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <h1 style={{
                fontSize: '2.8rem',
                color: '#333',
                marginBottom: '30px',
                borderBottom: '3px solid #4CAF50',
                paddingBottom: '10px'
            }}>
                About Us
            </h1>
            
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                alignItems: 'center'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>Our Story</h2>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: '#555',
                        marginBottom: '20px'
                    }}>
                        Founded in 1990, our company has been at the forefront of innovation and excellence. 
                        What started as a small team of passionate professionals has grown into a global 
                        leader in technology, marketing, and consultancy services.
                    </p>
                    
                    <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>Our Mission</h2>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: '#555'
                    }}>
                        To empower businesses with cutting-edge solutions that drive growth, enhance efficiency, 
                        and create lasting value for our clients and their customers.
                    </p>
                </div>
                
                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    backgroundColor: '#f5f5f5',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ color: '#333', marginBottom: '20px' }}>Our Values</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{
                            padding: '15px',
                            marginBottom: '10px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            borderLeft: '5px solid #4CAF50'
                        }}>
                            <strong>Innovation:</strong> Constantly pushing boundaries
                        </li>
                        <li style={{
                            padding: '15px',
                            marginBottom: '10px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            borderLeft: '5px solid #2196F3'
                        }}>
                            <strong>Integrity:</strong> Doing what's right, always
                        </li>
                        <li style={{
                            padding: '15px',
                            marginBottom: '10px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            borderLeft: '5px solid #FF9800'
                        }}>
                            <strong>Excellence:</strong> Quality in everything we do
                        </li>
                        <li style={{
                            padding: '15px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            borderLeft: '5px solid #9C27B0'
                        }}>
                            <strong>Collaboration:</strong> Stronger together
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
