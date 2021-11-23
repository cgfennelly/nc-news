import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTopics, getArticles, getQueryArticles } from "../api";

const Nav = ({ setArticles }) => {

    const [topics, setTopics] = useState([]);
    // const [selectedTopic, setSelectedTopic] = useState('');
    // let { topic } = useParams();
    // console.log(selectedTopic, "TOPIC NAV BAR")

    const handleClick = (e) => {
        // const topic = e.target.id;
        // console.log(e.target.id);
        // setSelectedTopic(topic);

        console.log(e.target.textContent)
        getQueryArticles(e.target.textContent)
            .then((res) => {
                setArticles(res)
            });
    }

    useEffect(() => {
        getTopics()
            .then((topics) => {
                const refreshTopics = [];
                topics.forEach(topic => {
                    refreshTopics.push(topic.slug);
                });
                setTopics(refreshTopics);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <nav className="nav">

            {topics.map((topic) => {
                console.log(topic)
                return (

                    <div key={topic} value={topic} className="topic-card" onClick={handleClick}>
                        <p>
                            {topic}
                        </p>
                    </div>

                );
            })}
        </nav>
    )
}

export default Nav;