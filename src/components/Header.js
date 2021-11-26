import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/User';

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header className="header">
            
                <Link to={'/'} >
                    <h1 className='header-main'>nc-news</h1>
                </Link>
                <p className='header-user'>Logged in: {user.username}</p>
            
        </header>
    )
}

export default Header;