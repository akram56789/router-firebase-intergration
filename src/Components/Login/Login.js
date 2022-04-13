import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin: "20px"}}>
                <button onClick={singInWithGoogle}>SingIn With Google</button>
            </div>
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