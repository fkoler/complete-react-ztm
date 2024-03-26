import { createContext, useState } from 'react';

// as the actual value you want to access
export const UserContext = createContext({});

export const UserPreovider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
