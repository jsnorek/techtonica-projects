import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import axios from "axios";

function LoginModal({ setLoginModalVisible, loginInfo, setLoginInfo, isLoggedIn, setIsLoggedIn }) {

    // Turn login modal off for cancel button
    const turnLoginModalOff = () => {
        setLoginModalVisible(false)
    }

    // Handles input changes for username and password input for login
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prevLogin) => ({...prevLogin, [name]: value}));
    };

    // Handles submit button for login modal. On click, it compares user input to database and upon
    // Confirming the match, the rest of user information will be pulled from database
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/login/`, {
                username: loginInfo.username,
                password: loginInfo.password
            });
            
            if (response.status === 200) {
                const user = response.data;
                setIsLoggedIn(true);
                setLoginModalVisible(false);
                console.log("Login successful", user);
            } else {
                console.error("Login failed", response.data.message);
            }
        } catch (error) {
            console.error("error logging in:", error);
        }
    };

    // To test/print a console log if user is logged in
    useEffect(() => {
        if (isLoggedIn) {
            console.log("User is now logged in", isLoggedIn);
        }
    }, [isLoggedIn]);


    return(
        <div className="login-modal">
            <p>Login</p>
            <input 
                id="login-username"
                type="text"
                name="username"
                placeholder="username"
                maxLength={35}
                onChange={handleChange}
                value={loginInfo.username}
            />
            <input
                id="login-password"
                type="password"
                name="password"
                placeholder="password"
                maxLength={35}
                onChange={handleChange}
                value={loginInfo.password}
            />
            <Button label="Login" onClick={handleLoginSubmit}/>
            <Button label="Cancel" onClick={turnLoginModalOff}/>
            <p>New user?</p>
            <Button label="Sign Up"/>
        </div>
    )
}
export default LoginModal;