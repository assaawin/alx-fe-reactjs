import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            textAlign: 'center',
            margin: '2rem auto',
            padding: '2rem',
            maxWidth: '400px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '2px solid #007bff'
        }}>
            <h2 style={{
                color: '#333',
                marginBottom: '1.5rem',
                fontSize: '1.8rem'
            }}>
                Simple Counter App
            </h2>
            
            <p style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: count > 0 ? 'green' : count < 0 ? 'red' : '#333',
                margin: '1.5rem 0',
                transition: 'color 0.3s ease'
            }}>
                {count}
            </p>
            
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
            }}>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        minWidth: '120px'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                >
                    Increment (+)
                </button>
                
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        minWidth: '120px'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
                >
                    Decrement (-)
                </button>
                
                <button 
                    onClick={() => setCount(0)}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        minWidth: '120px'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
                >
                    Reset (0)
                </button>
            </div>
            
            <p style={{
                marginTop: '1.5rem',
                color: '#666',
                fontSize: '0.9rem',
                fontStyle: 'italic'
            }}>
                Click the buttons to change the count
            </p>
        </div>
    );
}

export default Counter;
