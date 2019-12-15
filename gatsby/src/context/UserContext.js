import React from 'react';
import {userReducer} from "../reducers/userReducer";

export const defaultUserState = localStorage.getItem("userState")
    ? JSON.parse(localStorage.getItem("userState"))
    : {
    userKey: "",
    error: false,
    profile: {},
};

export const UserStateContext = React.createContext();
export const UserDispatchContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(userReducer, defaultUserState);

    React.useEffect(() => {
        localStorage.setItem("userState", JSON.stringify(state));
    }, [state]);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

export const useUserStateContext = () => {
    const context = React.useContext(UserStateContext);
    if (context === undefined) {
        throw new Error(
            "useStoreStateContext must be used within a UserStateProvider"
        );
    }
    return context;
};

export const useUserDispatchContext = () => {
    const context = React.useContext(UserDispatchContext);
    if (context === undefined) {
        throw new Error(
            "useStoreDispatchContext must be used within a UserDispatchContext"
        );
    }
    return context;
};
