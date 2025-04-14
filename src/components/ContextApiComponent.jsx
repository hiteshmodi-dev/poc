import React, { useContext, createContext, useState } from 'react';

export const UserContext = createContext();

export const ContextApiComponent = () => {
    const [user, setUser] = useState("testUser");

    return (
        <UserContext.Provider value={user}>
            <h1>{user}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

const Component2 = () => {
    return (
        <div>
            <h1>Component 2</h1>
            <Component3 />
        </div>
    );
}

const Component3 = () => {
    return (
        <div>
            <h1>Component 3</h1>
            <Component4 />
        </div>
    );
}

const Component4 = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component 4</h1>
            <h2>User: {user}</h2>
        </div>
    );
}