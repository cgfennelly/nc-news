import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleArticleById } from "../api";



const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setLoading] = useState(true);
    const { article_id } = useParams();

    useEffect(() => {
        setLoading(true);
        getSingleArticleById(article_id)
            .then((res) => {
                setLoading(false);
                setArticle(res)
            })
    }, [article_id])

    if (isLoading) return <p>loading...</p>

    return (
        <main className="article-max-card">
            <h2 className="article-header">{article.title}</h2>
            <div className="article-meta">
                <p>{article.author}</p>
                <p>{article.created_at}</p>
                <p>{article.votes}</p>
                <p>{article.topic}</p>
            </div>
            <p className="article-body">{article.body}</p>
        </main>
    );
}

export default SingleArticle;