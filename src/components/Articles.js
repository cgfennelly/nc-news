import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
            .then(articles => {
                setArticles(articles);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <main>
            <h2>Articles</h2>
            <div>
                {articles.map((article) => {
                    return (
                        <Link key={`${article.article_id}`} to={`/articles/${article.article_id}`} >
                            <p>{article.title}</p>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

export default Articles;