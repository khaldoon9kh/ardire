import React, {useState} from 'react';
import Logo from '../../imgs/logo.png';
import './index.css';
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const user = userCredential.user;
            console.log(user);
            window.location.href = '/admin/dash';
        }
        catch (error) {
            alert("The email or password you entered is incorrect.");
            console.log(error);
        }
    }

    return (
        <div className="loginPage">
            <div className="logoCont">
                <img src={Logo} alt="Logo" className='logoImg' />
            </div>
            <div className="loginContainer">
                <h2 className="loginTitle">Login</h2>
                <form className="loginForm">
                    <div className="inputGroup">
                        <label htmlFor="username" className="inputLabel">Username</label>
                        <input type="email" id="username" className="inputField" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password" className="inputLabel">Password</label>
                        <input type="password" id="password" className="inputField" value={password} onChange={handlePasswordChange} />
                    </div>
                    <a className="forgetPassword">Forget Password?</a>
                    <button 
                        type="submit" 
                        className="loginButton"
                        onClick={handleLogin}
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );

};

export default LoginPage;