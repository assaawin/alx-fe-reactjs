function Header() {
    return (
        <header style={{
            backgroundColor: 'navy',
            color: 'white', 
            textAlign: 'center',
            padding: '2rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderBottom: '3px solid gold'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                margin: '0',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>
                My Favorite Cities
            </h1>
        </header>
    );
}

export default Header;
