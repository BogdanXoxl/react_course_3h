import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {isAuth, setAuth} = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navbar__links">
                {isAuth && <MyButton onClick={() => setAuth(false)}>Log out</MyButton>}
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;
