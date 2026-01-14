import './App.css';
import { UserProvider } from './context/UserContext.jsx';  // Changed to .jsx
import ProfilePage from './components/ProfilePage';

function App() {
  // User data
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com"
  };

  return (
    // Wrap everything in UserProvider
    <UserProvider value={userData}>
      <div>
        <h1>Context API Example</h1>
        <p>Data is accessed directly via Context, no prop drilling!</p>
        <p>App provides data → UserDetails consumes it</p>
        
        {/* No props passed to ProfilePage! */}
        <ProfilePage />
      </div>
    </UserProvider>
  );
}

export default App;
