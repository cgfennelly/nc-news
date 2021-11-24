import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getArticles } from "../api";

const Articles = ({articles, setArticles}) => {
    const [isLoading, setLoading] = useState(true);
    const { topic } = useParams()



    useEffect(() => {
            setLoading(true);
            getArticles(topic)
            .then(articles => {
                setLoading(false);
                setArticles(articles);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, [setArticles, topic])

    if (isLoading) return <p>loading...</p>

    return (
        <main className="articles">
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