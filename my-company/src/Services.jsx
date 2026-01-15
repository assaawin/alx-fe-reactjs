function Services() {
    const services = [
        {
            id: 1,
            title: "Technology Consulting",
            description: "Expert guidance on technology strategy, implementation, and optimization.",
            icon: "💻",
            color: "#4CAF50"
        },
        {
            id: 2,
            title: "Market Analysis",
            description: "In-depth market research and competitive analysis to drive business decisions.",
            icon: "📊",
            color: "#2196F3"
        },
        {
            id: 3,
            title: "Product Development",
            description: "End-to-end product design, development, and deployment services.",
            icon: "🚀",
            color: "#FF9800"
        },
        {
            id: 4,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to boost your online presence.",
            icon: "📱",
            color: "#9C27B0"
        },
        {
            id: 5,
            title: "Cloud Solutions",
            description: "Scalable and secure cloud infrastructure and migration services.",
            icon: "☁️",
            color: "#00BCD4"
        },
        {
            id: 6,
            title: "Training & Support",
            description: "Customized training programs and 24/7 technical support.",
            icon: "🎓",
            color: "#FF5722"
        }
    ];

    return (
        <div style={{
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <h1 style={{
                fontSize: '2.8rem',
                color: '#333',
                marginBottom: '40px',
                textAlign: 'center'
            }}>
                Our Services
            </h1>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
            }}>
                {services.map(service => (
                    <div key={service.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        padding: '30px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        borderTop: `5px solid ${service.color}`,
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                        ':hover': {
                            transform: 'translateY(-10px)'
                        }
                    }}>
                        <div style={{
                            fontSize: '3rem',
                            marginBottom: '20px'
                        }}>
                            {service.icon}
                        </div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            {service.title}
                        </h3>
                        <p style={{
                            color: '#666',
                            lineHeight: '1.6',
                            marginBottom: '20px'
                        }}>
                            {service.description}
                        </p>
                        <button style={{
                            padding: '10px 20px',
                            backgroundColor: service.color,
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                        }}>
                            Learn More →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
