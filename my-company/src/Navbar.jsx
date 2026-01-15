import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav style={{
            backgroundColor: '#fff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: '0 20px',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '70px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: '#4CAF50',
                        marginRight: '40px'
                    }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Company<span style={{ color: '#333' }}>Logo</span>
                        </Link>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link 
                            to="/" 
                            style={{
                                textDecoration: 'none',
                                color: isActive('/') ? '#4CAF50' : '#333',
                                fontWeight: isActive('/') ? 'bold' : 'normal',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                transition: 'all 0.3s',
                                backgroundColor: isActive('/') ? '#f1f8e9' : 'transparent'
                            }}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            style={{
                                textDecoration: 'none',
                                color: isActive('/about') ? '#4CAF50' : '#333',
                                fontWeight: isActive('/about') ? 'bold' : 'normal',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                transition: 'all 0.3s',
                                backgroundColor: isActive('/about') ? '#f1f8e9' : 'transparent'
                            }}
                        >
                            About
                        </Link>
                        <Link 
                            to="/services" 
                            style={{
                                textDecoration: 'none',
                                color: isActive('/services') ? '#4CAF50' : '#333',
                                fontWeight: isActive('/services') ? 'bold' : 'normal',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                transition: 'all 0.3s',
                                backgroundColor: isActive('/services') ? '#f1f8e9' : 'transparent'
                            }}
                        >
                            Services
                        </Link>
                        <Link 
                            to="/contact" 
                            style={{
                                textDecoration: 'none',
                                color: isActive('/contact') ? '#4CAF50' : '#333',
                                fontWeight: isActive('/contact') ? 'bold' : 'normal',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                transition: 'all 0.3s',
                                backgroundColor: isActive('/contact') ? '#f1f8e9' : 'transparent'
                            }}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                
                <button style={{
                    padding: '10px 25px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                }}>
                    Get in Touch
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
