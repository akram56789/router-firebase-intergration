import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please Register Your ID</h1>
            <form action="">
            <input type="text" placeholder='your name' />
            <br />
            <input type="email" placeholder='your email' />
             <br />
             <input type="password" placeholder='your password' /> <br />
             <input type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;