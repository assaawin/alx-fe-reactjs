import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been submitted. We'll get back to you soon.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h1 style={{
                fontSize: '2.8rem',
                color: '#333',
                marginBottom: '10px',
                textAlign: 'center'
            }}>
                Contact Us
            </h1>
            <p style={{
                textAlign: 'center',
                color: '#666',
                marginBottom: '40px',
                fontSize: '1.1rem'
            }}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                marginBottom: '40px'
            }}>
                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    backgroundColor: '#f8f9fa',
                    padding: '30px',
                    borderRadius: '10px'
                }}>
                    <h3 style={{ color: '#333', marginBottom: '20px' }}>Contact Information</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ color: '#4CAF50', fontWeight: 'bold' }}>📍 Address</p>
                        <p>123 Business Street, Suite 100</p>
                        <p>City, State 12345</p>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ color: '#4CAF50', fontWeight: 'bold' }}>📞 Phone</p>
                        <p>(123) 456-7890</p>
                    </div>
                    <div>
                        <p style={{ color: '#4CAF50', fontWeight: 'bold' }}>✉️ Email</p>
                        <p>info@ourcompany.com</p>
                    </div>
                </div>
                
                <div style={{
                    flex: '2',
                    minWidth: '300px'
                }}>
                    <form onSubmit={handleSubmit} style={{
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: 'bold',
                                color: '#333'
                            }}>
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: 'bold',
                                color: '#333'
                            }}>
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: 'bold',
                                color: '#333'
                            }}>
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    fontSize: '1rem',
                                    resize: 'vertical'
                                }}
                            />
                        </div>
                        
                        <button type="submit" style={{
                            width: '100%',
                            padding: '15px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
