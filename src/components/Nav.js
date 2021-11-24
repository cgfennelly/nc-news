import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics, getQueryArticles } from "../api";

const Nav = ({ setArticles, setSelectedTopic }) => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics()
            .then((topics) => {
                const refreshTopics = [];
                topics.forEach(topic => refreshTopics.push(topic.slug) );
                setTopics(refreshTopics);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleClick = (e) => {
        setSelectedTopic(e.target.textContent)
        getQueryArticles(e.target.textContent)
            .then((res) => {
                setArticles(res)
            });
    }

    return (
        <nav className="nav">
            {topics.map((topic) => {
                return (
                    <Link key={topic} to={`/${topic}`} onClick={handleClick} className={`topic-card ${topic}`}>
                            <p>{topic}</p>
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav;