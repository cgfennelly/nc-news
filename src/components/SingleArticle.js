import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleArticleById, getSingleArticleComments } from "../api";
import ArticleVote from "./ArticleVote";


const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [articleComments, setArticleComments] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { article_id } = useParams();

    useEffect(() => {
        setLoading(true);
        getSingleArticleById(article_id)
            .then((res) => {
                setLoading(false);
                setArticle(res)
            })
        getSingleArticleComments(article_id)
            .then((res) => {
                setArticleComments(res);
            })
    }, [article_id])

    if (isLoading) return <p>loading...</p>

    return (
        <>
            <main className="article-max-card">
                <h2 className="article-header">{article.title}</h2>
                <div className="article-meta">
                    <p>{article.author}</p>
                    <p>{article.created_at}</p>
                    <ArticleVote article_id={article_id} votes={article.votes}/>
                    
                    <p>{article.topic}</p>
                </div>
                <p className="article-body">{article.body}</p>
            </main>
            <section className='comment-container'>
                {articleComments.map((comment) => {
                    return (
                        <div key={comment.comment_id} className='comment-card'>
                            <p className='comment-body'>{comment.body}</p>
                            <div className='comment-meta'>
                                <p>{comment.votes}</p>
                                <p>{comment.author}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    );
}

export default SingleArticle;