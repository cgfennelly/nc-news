import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { deleteComment, getSingleArticleById, getSingleArticleComments } from "../api";
import { UserContext } from "../context/User";
import ArticleVote from "./ArticleVote";
import PostComment from "./PostComment";


const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [articleComments, setArticleComments] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [commentDeleted, setCommentDeleted] = useState('');
    const { article_id } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        setLoading(true);
        getSingleArticleById(article_id)
            .then((res) => {
                let singleArticleData = res;
                singleArticleData.created_at = res.created_at.slice(0, 10)
                setLoading(false);
                setArticle(singleArticleData)
            })
        getSingleArticleComments(article_id)
            .then((res) => {
                setArticleComments(res);

            })
    }, [article_id, setArticle, setArticleComments])

    if (isLoading) return <p>loading...</p>

    return (
        <>
            <main className="article-max-card">
                <h2 className="article-header">{article.title}</h2>
                <div className="article-meta">
                    <p>{article.author}</p>
                    <p>{article.created_at}</p>
                    <ArticleVote article_id={article_id} votes={article.votes} />

                    <p>{article.topic}</p>
                </div>
                <p className="article-body">{article.body}</p>
            </main>
            <PostComment article_id={article_id} />
            <section className='comment-container'>
                {articleComments.map((comment) => {
                    if (commentDeleted === comment.comment_id) {
                        return (
                            <div key={comment.comment_id} className='comment-card'>
                                <p className='comment-body'>Comment deleted</p>
                                <div className='comment-meta'>
                                    <p> </p>
                                    <p>{comment.author}</p>
                                </div>
                            </div>
                        )
                    }
                    else if (user.username === comment.author) {
                        return (
                            <div key={comment.comment_id} className='comment-card'>
                                <p className='comment-body'>{comment.body}</p>
                                <div className='comment-meta'>
                                    <p>{comment.votes}</p>
                                    <div className='comment-meta-user'>
                                        <p>{comment.author}</p>
                                        <button className='comment-meta-delete' onClick={() => {
                                            deleteComment(comment.comment_id)
                                            setCommentDeleted(comment.comment_id)
                                        }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={comment.comment_id} className='comment-card'>
                                <p className='comment-body'>{comment.body}</p>
                                <div className='comment-meta'>
                                    <p>{comment.votes}</p>
                                    <p>{comment.author}</p>
                                </div>
                            </div>
                        )
                    }

                })}
            </section>
        </>
    );
}

export default SingleArticle;