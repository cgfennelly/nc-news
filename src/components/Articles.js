import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles, getQueryArticles } from "../api";

const Articles = ({articles, setArticles, selectedTopic}) => {

    useEffect(() => {
        if (!selectedTopic) {
            getArticles()
            .then(articles => {
                setArticles(articles);
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            getQueryArticles(selectedTopic)
            .then(articles => {
                setArticles(articles);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }, [selectedTopic, setArticles])

    return (
        <main className="articles">
            <h2>{!selectedTopic ? "Articles" : `${selectedTopic} articles`}</h2>
            <div>
                {articles.map((article) => {
                    return (
                        <div key={`${article.article_id}`} className={`article-card ${article.topic}`}>
                            <Link key={`${article.article_id}`} to={`/articles/${article.article_id}`} >
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