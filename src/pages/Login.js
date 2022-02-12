import React, {useContext} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import {AuthContext} from '../context';


const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setAuth(true);
        localStorage.setItem('Auth', true);
    }

    return (
        <div>
            <h1>Login page</h1>
            <form action="" onSubmit={login}>
                <MyInput type="text" placeholder='name' name="login"/>
                <MyInput type="password" placeholder='password' name="password"/>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;
