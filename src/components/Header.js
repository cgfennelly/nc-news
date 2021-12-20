import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/User';

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header className="header">
            <div>
                <Link to={'/'} >
                    <h1 className='header-main'>Interesting News!</h1>
                </Link>
            </div>
                <p className='header-user'>Logged in: {user.username}</p>
        </header>
    )
}

export default Header;