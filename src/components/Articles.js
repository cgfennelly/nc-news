import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getArticles, getQueryArticles } from "../api";

const Articles = ({articles, setArticles, selectedTopic}) => {
    const [isLoading, setLoading] = useState(true);
    const { topic } = useParams()

    useEffect(() => {
        if (!selectedTopic) {
            setLoading(true);
            getArticles()
            .then(articles => {
                setLoading(false);
                setArticles(articles);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
        } else {
            setLoading(true);
            getQueryArticles(topic)
            .then(articles => {
                setLoading(false);
                setArticles(articles);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
        }
    }, [topic, setArticles])

    if (isLoading) return <p>loading...</p>

    return (
        <main className="articles">
            <h2>{!selectedTopic ? "Articles" : `${selectedTopic} articles`}</h2>
            <div>
                {articles.map((article) => {
                    return (
                        <div key={`${article.article_id}`} className={`article-mini-card ${article.topic}`}>
                            <Link key={`${article.article_id}`} to={`/articles/${article.article_id}`}>
                                <p>{article.title}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Articles;