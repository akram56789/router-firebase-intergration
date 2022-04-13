import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, handleSignOut} = useFirebase()
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/register">Register</Link>
                <span className='display-name'>{user?.displayName && user.displayName}</span>
                {
                    user?.uid 
                    ?
                    <button onClick={handleSignOut}>Sing Out</button>
                    :
                    <Link to='/login'>Login</Link>
                }
            </nav>
          
        </div>
    );
};

export default Header;