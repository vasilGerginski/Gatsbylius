import React from "react";
import {StoreProvider} from "./src/context/StoreContext";
import {UserProvider} from "./src/context/UserContext";

export const wrapRootElement = ({element}) => (
    <UserProvider>
        <StoreProvider>{element}</StoreProvider>
    </UserProvider>
);
