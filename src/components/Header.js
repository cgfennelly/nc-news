import { Link } from "react-router-dom";

const Header = ({ setSelectedTopic }) => {

    const handleClick = () => {
        setSelectedTopic(null)
    }

    return (
        <header className="header">
            <Link to={'/'} onClick={handleClick}>
                <h1>nc-news</h1>
            </Link>
        </header>
    )
}

export default Header;