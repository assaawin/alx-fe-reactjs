import { createContext } from 'react';

// 1. Create the context
const UserContext = createContext();

// 2. Create a Provider component (optional but recommended)
export const UserProvider = ({ children, value }) => {
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

// 3. Export the context
export { UserContext };
