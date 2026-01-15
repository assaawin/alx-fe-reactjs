function Footer() {
    return (
        <footer style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '40px 20px',
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px'
            }}>
                <div>
                    <h3 style={{ color: '#4CAF50', marginBottom: '20px' }}>Company Logo</h3>
                    <p style={{ lineHeight: '1.6', color: '#ccc' }}>
                        Empowering businesses with innovative solutions since 1990. 
                        We're committed to excellence and customer satisfaction.
                    </p>
                </div>
                
                <div>
                    <h4 style={{ marginBottom: '20px', color: '#fff' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><a href="/" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a></li>
                        <li style={{ marginBottom: '10px' }}><a href="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About Us</a></li>
                        <li style={{ marginBottom: '10px' }}><a href="/services" style={{ color: '#ccc', textDecoration: 'none' }}>Services</a></li>
                        <li style={{ marginBottom: '10px' }}><a href="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 style={{ marginBottom: '20px', color: '#fff' }}>Contact Info</h4>
                    <p style={{ marginBottom: '10px', color: '#ccc' }}>📍 123 Business Street, City, State 12345</p>
                    <p style={{ marginBottom: '10px', color: '#ccc' }}>📞 (123) 456-7890</p>
                    <p style={{ marginBottom: '10px', color: '#ccc' }}>✉️ info@ourcompany.com</p>
                </div>
                
                <div>
                    <h4 style={{ marginBottom: '20px', color: '#fff' }}>Newsletter</h4>
                    <p style={{ color: '#ccc', marginBottom: '15px' }}>Subscribe to our newsletter for updates.</p>
                    <div style={{ display: 'flex' }}>
                        <input 
                            type="email" 
                            placeholder="Your email" 
                            style={{
                                flex: '1',
                                padding: '10px',
                                border: 'none',
                                borderRadius: '5px 0 0 5px'
                            }}
                        />
                        <button style={{
                            padding: '10px 15px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0 5px 5px 0',
                            cursor: 'pointer'
                        }}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            
            <div style={{
                maxWidth: '1200px',
                margin: '40px auto 0',
                paddingTop: '20px',
                borderTop: '1px solid #555',
                textAlign: 'center',
                color: '#aaa'
            }}>
                <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
