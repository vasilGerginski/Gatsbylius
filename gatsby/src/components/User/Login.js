import React from "react";
import {useUserDispatchContext, useUserStateContext} from "../../context/UserContext";

const Login = () => {
    const userState = useUserStateContext();
    const userDispatch = useUserDispatchContext();

    return (
        <>
            <h1>Log in</h1>
            <form method={"post"}>
                <label>
                    Email
                    <input type="email" name={"email"}/>
                </label>
                <label>
                    Password
                    <input type="password" name={"password"}/>
                </label>
                <input type="submit" value={"Log in"}/>
            </form>
        </>
    );
}

export default Login