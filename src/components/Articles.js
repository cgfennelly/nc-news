import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../api";

const Articles = ({articles, setArticles}) => {

    //const [articles, setArticles] = useState([]);
    //let { topic } = useParams();
    //console.log(topic, "IS THIS TOPIC HERE");


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
        <main className="articles">
            <h2>Articles</h2>
            <div>
                {articles.map((article) => {
                    return (
                        <div className="article-card">
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