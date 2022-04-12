import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <form action="">
                <input type="email" placeholder='your email'  />
                <br />
                <input type="password" placeholder='your password' /><br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;