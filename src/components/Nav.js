import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

const Nav = () => {
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

    return (
        <nav className="nav">
            {topics.map((topic) => {
                return (
                    <Link key={topic} to={`/${topic}`} className={`topic-card ${topic}`}>
                            <p>{topic}</p>
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav;